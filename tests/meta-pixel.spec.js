import { test, expect } from "@playwright/test";
import { pages } from "../src/config/pages.js";
import { META_PIXEL_ID, META_CONSENT_EVENT } from "../src/config/metaPixel.js";

async function consent(page, granted) {
  await page.evaluate(
    ({ name, granted }) => {
      window.dispatchEvent(new CustomEvent(name, { detail: { granted } }));
    },
    { name: META_CONSENT_EVENT, granted },
  );
}
async function calls(page, event) {
  return page.evaluate(
    (event) =>
      (window.__metaCalls ?? []).filter(
        (call) => call[0] === "track" && call[1] === event,
      ),
    event,
  );
}
async function stopNavigation(page) {
  await page.locator('a[href*="wa.me"]').evaluateAll((links) =>
    links.forEach((link) => {
      link.addEventListener("click", (event) => event.preventDefault());
      link.addEventListener("auxclick", (event) => event.preventDefault());
    }),
  );
}

test.beforeEach(async ({ page }) => {
  // Never contact Meta/GA servers or send real advertising/test events.
  await page.route(/google-analytics|googletagmanager|facebook\.com/, (route) =>
    route.abort(),
  );
  await page.addInitScript(() => {
    window.__metaCalls = [];
  });
  await page.route("https://connect.facebook.net/en_US/fbevents.js", (route) =>
    route.fulfill({
      contentType: "application/javascript",
      body: `window.__metaCalls.push(...window.fbq.queue.map(args => Array.from(args)));
window.fbq.queue = [];
window.fbq.callMethod = function () { window.__metaCalls.push(Array.from(arguments)); };`,
    }),
  );
});

test("automatic startup: one PageView, Contact only on a real click, URL unchanged", async ({
  page,
}) => {
  await page.goto("/");
  await expect.poll(async () => (await calls(page, "PageView")).length).toBe(1);
  expect(await calls(page, "Contact")).toEqual([]);
  const hero = page.locator('.hero-copy a[href*="wa.me"]');
  const href = await hero.getAttribute("href");
  await expect(hero).toHaveAttribute("target", "_blank");
  await stopNavigation(page);
  await hero.click();
  await expect(hero).toHaveAttribute("href", href);
  expect((await calls(page, "Contact")).length).toBe(1);
  await consent(page, false);
  await hero.click();
  expect((await calls(page, "Contact")).length).toBe(1);
});

test("consent initializes once, PageView once, no automatic click events", async ({
  page,
}) => {
  await page.goto("/");
  await consent(page, true);
  await expect.poll(async () => (await calls(page, "PageView")).length).toBe(1);
  await consent(page, true);
  await page.locator(".hero-copy").hover();
  await page.evaluate(() => window.scrollTo(0, 500));
  await page.locator(".desktop-nav a").first().click();
  expect((await calls(page, "PageView")).length).toBe(1);
  expect(await calls(page, "Contact")).toEqual([]);
  await expect(page.locator("#fisiovet-meta-pixel")).toHaveCount(1);
  expect(
    await page.evaluate(() =>
      window.__metaCalls.filter((call) => call[0] === "init"),
    ),
  ).toEqual([["init", META_PIXEL_ID]]);
  expect(await page.evaluate(() => window.__metaCalls)).toContainEqual([
    "set",
    "autoConfig",
    false,
    META_PIXEL_ID,
  ]);
});

for (const entry of pages) {
  test(`all WhatsApp links covered, fixed Contact payload: ${entry.path}`, async ({
    page,
  }) => {
    await page.goto(entry.path);
    await consent(page, true);
    await expect
      .poll(async () => (await calls(page, "PageView")).length)
      .toBe(1);
    await stopNavigation(page);
    const links = page.locator('a[href*="wa.me"]');
    expect(await links.count()).toBe(8);
    for (let index = 0; index < (await links.count()); index++) {
      const link = links.nth(index);
      const href = await link.getAttribute("href");
      await link.dispatchEvent("click", { button: 0 });
      expect((await calls(page, "Contact")).length).toBe(index + 1);
      await expect(link).toHaveAttribute("href", href);
      await expect(link).toHaveAttribute("target", "_blank");
    }
    expect(await calls(page, "Contact")).toEqual(
      Array.from({ length: 8 }, () => [
        "track",
        "Contact",
        {
          content_name: "whatsapp",
          content_category: "veterinary_physiotherapy",
        },
      ]),
    );
  });
}

test("same native click cannot duplicate Contact; new click and middle click count separately", async ({
  page,
}) => {
  await page.goto("/");
  await consent(page, true);
  await expect.poll(async () => (await calls(page, "PageView")).length).toBe(1);
  await stopNavigation(page);
  await page.locator(".hero-copy a").evaluate((link) => {
    const event = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      button: 0,
    });
    link.dispatchEvent(event);
    link.dispatchEvent(event);
  });
  expect((await calls(page, "Contact")).length).toBe(1);
  await page.locator(".hero-copy a").click();
  expect((await calls(page, "Contact")).length).toBe(2);
  await page.locator(".hero-copy a").dispatchEvent("auxclick", { button: 1 });
  expect((await calls(page, "Contact")).length).toBe(3);
  await page.locator(".hero-copy a").dispatchEvent("auxclick", { button: 2 });
  expect((await calls(page, "Contact")).length).toBe(3);
});

test("mobile sticky click, revocation and regrant without replaying old clicks", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await stopNavigation(page);
  await consent(page, true);
  await expect.poll(async () => (await calls(page, "PageView")).length).toBe(1);
  await page.locator(".mobile-contact a").click();
  expect((await calls(page, "Contact")).length).toBe(1);
  await consent(page, false);
  await page.locator(".mobile-contact a").click();
  expect((await calls(page, "Contact")).length).toBe(1);
  await consent(page, true);
  expect((await calls(page, "Contact")).length).toBe(1);
  expect((await calls(page, "PageView")).length).toBe(1);
  await page.locator(".mobile-contact a").click();
  expect((await calls(page, "Contact")).length).toBe(2);
});

for (const path of ["/?email=private@example.test", "/#private-patient"]) {
  test(`fail closed before SDK can read a potentially sensitive URL: ${path}`, async ({
    page,
  }) => {
    await page.goto(path);
    await consent(page, true);
    await stopNavigation(page);
    await page.locator(".hero-copy a").click();
    await expect(page.locator("#fisiovet-meta-pixel")).toHaveCount(0);
    expect(await calls(page, "Contact")).toEqual([]);
  });
}

test("existing foreign Pixel is not initialized or loaded twice", async ({
  page,
}) => {
  await page.addInitScript(() => {
    window.fbq = (...args) => window.__metaCalls.push(args);
  });
  await page.goto("/");
  await consent(page, true);
  await stopNavigation(page);
  await page.locator(".hero-copy a").click();
  expect(await page.evaluate(() => window.__metaCalls)).toEqual([]);
  await expect(page.locator("#fisiovet-meta-pixel")).toHaveCount(0);
});

test("real internal document navigation gets one PageView in each document", async ({
  page,
}) => {
  // Test fixture simulates a CMP replaying the explicit choice on each new page.
  await page.addInitScript(
    (name) =>
      window.addEventListener("load", () => {
        window.dispatchEvent(
          new CustomEvent(name, { detail: { granted: true } }),
        );
      }),
    META_CONSENT_EVENT,
  );
  await page.goto("/");
  await expect.poll(async () => (await calls(page, "PageView")).length).toBe(1);
  await page.locator(".case-item").first().click();
  await expect(page).toHaveURL(/reabilitacao-pos-operatoria-caes-porto-alegre/);
  await expect.poll(async () => (await calls(page, "PageView")).length).toBe(1);
  await expect(page.locator("#fisiovet-meta-pixel")).toHaveCount(1);
});

test("blocked SDK never prevents opening the original WhatsApp URL in a new tab", async ({
  page,
  context,
}) => {
  await page.route("https://connect.facebook.net/en_US/fbevents.js", (route) =>
    route.abort(),
  );
  await context.route("https://wa.me/**", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<p>WhatsApp destination mocked locally</p>",
    }),
  );
  await page.goto("/");
  await consent(page, true);
  const link = page.locator(".hero-copy a");
  const href = await link.getAttribute("href");
  const popupPromise = page.waitForEvent("popup");
  await link.click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(href);
  expect(
    await page.evaluate(() =>
      window.fbq.queue
        .map((args) => Array.from(args))
        .filter((call) => call[0] === "track" && call[1] === "Contact"),
    ),
  ).toEqual([
    [
      "track",
      "Contact",
      {
        content_name: "whatsapp",
        content_category: "veterinary_physiotherapy",
      },
    ],
  ]);
  await popup.close();
});

test("GA and Meta exceptions do not break WhatsApp navigation", async ({
  page,
  context,
}) => {
  await context.route("https://wa.me/**", (route) =>
    route.fulfill({ contentType: "text/html", body: "<p>Mock WhatsApp</p>" }),
  );
  await page.goto("/");
  await consent(page, true);
  await expect.poll(async () => (await calls(page, "PageView")).length).toBe(1);
  await page.evaluate(() => {
    window.gtag = () => {
      throw new Error("Simulated GA failure");
    };
    window.fbq.callMethod = () => {
      throw new Error("Simulated Meta failure");
    };
  });
  const href = await page.locator(".hero-copy a").getAttribute("href");
  const popupPromise = page.waitForEvent("popup");
  await page.locator(".hero-copy a").click();
  const popup = await popupPromise;
  await expect(popup).toHaveURL(href);
  await popup.close();
});

test("campaign fbclid and token-based UTM work without a banner", async ({
  page,
}) => {
  await page.goto(
    "/?fbclid=IwABC_123&utm_source=facebook&utm_campaign=campaign_42",
  );
  await expect.poll(async () => (await calls(page, "PageView")).length).toBe(1);
  await stopNavigation(page);
  await page.locator(".hero-copy a").click();
  expect(await calls(page, "Contact")).toEqual([
    [
      "track",
      "Contact",
      {
        content_name: "whatsapp",
        content_category: "veterinary_physiotherapy",
      },
    ],
  ]);
});
