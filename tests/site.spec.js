import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { pages } from "../src/config/pages.js";
import {
  INSTAGRAM_URL,
  SITE_URL,
  WHATSAPP_NUMBER,
} from "../src/config/site.js";

// No analytics calls or outbound WhatsApp/Instagram messages during verification.
test.beforeEach(async ({ page }) => {
  await page.route(
    /google-analytics|googletagmanager|connect\.facebook\.net|facebook\.com/,
    (route) => route.abort(),
  );
});

for (const entry of pages) {
  test(`HTML without JavaScript: ${entry.path}`, async ({ request }) => {
    const response = await request.get(entry.path);
    expect(response.status()).toBe(200);
    const html = await response.text();
    expect(html).toContain(entry.heading);
    expect(html).toContain(`<title>${entry.title}</title>`);
    expect(html).toContain(`rel="canonical" href="${SITE_URL}${entry.path}"`);
    expect(html).toContain("application/ld+json");
    expect(html).not.toContain("<!--app-html-->");
    expect(html).not.toContain("seuinstagram");
    expect(html).not.toContain("Estes textos são mockups");
  });
}

for (const width of [320, 360, 390, 768, 1440]) {
  test(`Home layout and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/");
    await expect(page.locator("h1")).toHaveText(pages[0].heading);
    await expect(page.locator(".brand-logo")).toHaveAttribute(
      "src",
      "/images/logo-eduarda-header.png",
    );
    await expect(page.locator(".brand-logo")).toHaveJSProperty(
      "complete",
      true,
    );
    expect(
      await page.locator(".brand-logo").evaluate((image) => image.naturalWidth),
    ).toBeGreaterThan(0);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    expect(
      await page
        .locator(".hero-photo img")
        .evaluate((image) => image.complete && image.naturalWidth > 0),
    ).toBe(true);
    if (width < 900) {
      await expect(page.locator(".mobile-contact")).toBeVisible();
      await page.locator(".mobile-nav summary").click();
      await expect(
        page.getByRole("navigation", { name: "Navegação pelo celular" }),
      ).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(page.locator(".mobile-nav")).not.toHaveAttribute("open");
      await expect(page.locator(".mobile-nav summary")).toBeFocused();
    }
    const contacts = page.locator('a[href*="wa.me"]:visible');
    if (width < 900) await expect(contacts).toHaveCount(1);
    else expect(await contacts.count()).toBeGreaterThan(1);
    await expect(
      page.getByText("Atendimento com a médica-veterinária Eduarda Pata.", {
        exact: true,
      }),
    ).toHaveCount(0);
    const question = page.locator(".faq-list summary").first();
    await question.click();
    await expect(page.locator(".faq-list details").first()).toHaveAttribute(
      "open",
    );
    await expect(
      page.locator(".faq-list details").first().locator("p").first(),
    ).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

for (const entry of pages.slice(1)) {
  test(`Mobile service page: ${entry.label}`, async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 800 });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(entry.path);
    await expect(page).toHaveTitle(entry.title);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText(entry.heading);
    await expect(
      page.getByRole("heading", { name: entry.detailTitle }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    expect(errors).toEqual([]);
  });
}

test("Contact links, existing anchor targets and event attribution", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.locator(".mobile-contact")).toHaveText("Falar no WhatsApp");
  await expect(page.locator(".mobile-contact .whatsapp-icon")).toHaveCount(1);
  await expect(page.locator(".mobile-contact .button")).toHaveCSS(
    "background-color",
    "rgb(0, 124, 131)",
  );
  for (const link of await page.locator('a[href*="instagram.com"]').all()) {
    await expect(link).toHaveAttribute("href", INSTAGRAM_URL);
  }
  for (const link of await page.locator('a[href*="wa.me"]').all()) {
    const url = new URL(await link.getAttribute("href"));
    expect(url.pathname).toBe(`/${WHATSAPP_NUMBER}`);
    expect(url.searchParams.get("text")).toContain("Vim pelo site");
  }
  const broken = await page.locator('a[href*="#"]').evaluateAll((links) =>
    links
      .map((link) => new URL(link.href))
      .filter(
        (url) =>
          url.pathname === location.pathname &&
          !document.getElementById(decodeURIComponent(url.hash.slice(1))),
      )
      .map((url) => url.href),
  );
  expect(broken).toEqual([]);
  await page.evaluate(() => {
    window.__events = [];
    window.gtag = (...args) => window.__events.push(args);
  });
  await page.setViewportSize({ width: 1440, height: 900 });
  await page
    .locator('.hero-copy a[href*="wa.me"]')
    .evaluate((link) =>
      link.addEventListener("click", (event) => event.preventDefault()),
    );
  await page.locator('.hero-copy a[href*="wa.me"]').click();
  expect(await page.evaluate(() => window.__events)).toContainEqual([
    "event",
    "click_whatsapp",
    { section: "hero", page_path: "/" },
  ]);
});

test("Unknown address renders a useful error page", async ({ page }) => {
  await page.goto("/404.html");
  await expect(
    page.getByRole("heading", { name: "Vamos encontrar o caminho?" }),
  ).toBeVisible();
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    "noindex, follow",
  );
});

test("Social image is available", async ({ request }) => {
  const response = await request.get("/og-image.jpg");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("image/jpeg");
});
