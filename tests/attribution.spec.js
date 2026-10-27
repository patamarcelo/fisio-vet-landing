import { test, expect } from "@playwright/test";

const adQuery =
  "?utm_source=ig&utm_medium=paid_social&utm_campaign=eduarda_fisioterapia_poa&utm_content=123456789";
const message = (link) => new URL(link).searchParams.get("text");

test.beforeEach(async ({ page }) => {
  await page.route(
    /google-analytics|googletagmanager|connect\.facebook\.net|facebook\.com/,
    (route) => route.abort(),
  );
});

async function assertAdMessages(page) {
  await expect
    .poll(async () =>
      message(await page.locator(".mobile-contact a").getAttribute("href")),
    )
    .toMatch(/ Vim pelo site\.$/);
  for (const link of await page.locator('a[href*="wa.me"]').all()) {
    const href = await link.getAttribute("href");
    const text = message(href);
    expect(new URL(href).pathname).toBe("/5551992806633");
    expect(text).toContain("Vim pelo site.");
    expect(text).not.toContain("Vim pelo site e");
    expect(text).not.toMatch(/instagram|anúncio|123456789|utm_/i);
    await expect(link).toHaveAttribute("target", "_blank");
  }
}

test("paid Instagram uses reordered text in all buttons, including mobile, without hydration errors", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (msg) => {
    if (
      msg.type() === "error" &&
      /hydration|hydrating|did not match|#418/.test(msg.text())
    )
      errors.push(msg.text());
  });
  await page.goto("/" + adQuery);
  await assertAdMessages(page);
  expect(
    message(await page.locator(".mobile-contact a").getAttribute("href")),
  ).toBe(
    "Olá! Gostaria de mais informações sobre o atendimento de fisioterapia veterinária domiciliar para meu pet. Vim pelo site.",
  );
  expect(
    message(
      await page
        .locator("a[data-whatsapp]")
        .filter({ hasText: "Consultar meu bairro" })
        .getAttribute("href"),
    ),
  ).toBe(
    "Olá! Gostaria de consultar o atendimento em casa. Vim pelo site. Meu bairro/cidade é: ",
  );
  expect(errors).toEqual([]);
});

test("retains origin on internal navigation and refresh; explicit Facebook origin clears it", async ({
  page,
}) => {
  await page.goto("/" + adQuery);
  await assertAdMessages(page);
  await page.locator(".case-item").first().click();
  await assertAdMessages(page);
  await page.reload();
  await assertAdMessages(page);
  await page.goto("/?utm_source=fb&utm_medium=paid_social");
  await expect
    .poll(async () =>
      message(await page.locator(".mobile-contact a").getAttribute("href")),
    )
    .toContain("Vim pelo site e");
  await page.goto("/fisioterapia-para-caes-porto-alegre");
  expect(
    message(await page.locator(".mobile-contact a").getAttribute("href")),
  ).toContain("Vim pelo site e");
});

for (const query of [
  "",
  "?utm_source=ig",
  "?utm_source=ig&utm_medium=organic",
  "?fbclid=test",
  "?utm_source=fb&utm_medium=paid_social",
  "?utm_source=%7B%7Bsite_source_name%7D%7D&utm_medium=paid_social",
]) {
  test(`does not classify untagged/organic/non-Instagram traffic as Instagram ads: ${query}`, async ({
    page,
  }) => {
    await page.goto("/" + query);
    for (const link of await page.locator('a[href*="wa.me"]').all())
      expect(message(await link.getAttribute("href"))).toContain(
        "Vim pelo site e",
      );
  });
}

test("storage unavailable does not break attribution in the current document", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "sessionStorage", {
      get() {
        throw new Error("Storage blocked");
      },
    });
  });
  await page.goto("/" + adQuery);
  await assertAdMessages(page);
});
