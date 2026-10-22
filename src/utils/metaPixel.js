import {
  META_PIXEL_ID,
  META_CONSENT_EVENT,
  META_PIXEL_AUTO_START,
} from "../config/metaPixel";
import { getPage } from "../config/pages";

let trackingAllowed = META_PIXEL_AUTO_START;
let initialized = false;
let listening = false;
let lastPageView = null;
let ownedFbq = null;

const safeFragments = new Set([
  "",
  "#conteudo",
  "#casos",
  "#como-funciona",
  "#quem-sou-eu",
  "#area-atendimento",
  "#faq",
]);

const marketingKeys = new Set([
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id",
  "campaign_id",
  "ad_id",
  "adset_id",
]);
function safeUrl(url) {
  if (!safeFragments.has(url.hash)) return false;
  // Only campaign IDs/tokens, not free-form text, WhatsApp text or contact fields.
  for (const [key, value] of url.searchParams) {
    if (!marketingKeys.has(key) || !/^[A-Za-z0-9_.~-]{1,512}$/.test(value))
      return false;
  }
  return true;
}

// The SDK sends URL/referrer automatically. Restrict unknown parameters rather
// than forwarding arbitrary query strings; never rewrite the visitor's URL.
function safeContext() {
  if (typeof window === "undefined") return false;
  if (!getPage(window.location.pathname)) return false;
  if (!safeUrl(new URL(window.location.href))) return false;
  if (document.referrer) {
    try {
      if (!safeUrl(new URL(document.referrer))) return false;
    } catch {
      return false;
    }
  }
  return true;
}

function initialize() {
  if (initialized) return window.fbq === ownedFbq;
  // Do not initialize twice or take over another installation with unknown consent.
  if (
    window.fbq ||
    document.querySelector(
      'script[src*="connect.facebook.net"][src*="fbevents.js"]',
    )
  )
    return false;

  // Official Meta bootstrap; automatic loading is an explicit site configuration.
  const fbq = function () {
    if (fbq.callMethod) fbq.callMethod.apply(fbq, arguments);
    else fbq.queue.push(arguments);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;
  if (!window._fbq) window._fbq = fbq;
  ownedFbq = fbq;
  initialized = true;

  // Prevent automatic interaction events/automatic configuration. No user data
  // is supplied to init; also disable automatic matching in Events Manager.
  fbq("set", "autoConfig", false, META_PIXEL_ID);
  fbq("init", META_PIXEL_ID);

  const script = document.createElement("script");
  script.id = "fisiovet-meta-pixel";
  script.async = true;
  script.src = "https://connect.facebook.net/en_US/fbevents.js";
  document.head.appendChild(script);
  return true;
}

export function trackMetaPageView() {
  try {
    if (!trackingAllowed || !safeContext() || !initialize()) return;
    const page = getPage(window.location.pathname).path;
    if (page === lastPageView) return;
    ownedFbq("track", "PageView");
    lastPageView = page;
  } catch {
    /* Tracking failures must never affect the application. */
  }
}

export function trackMetaWhatsAppContact() {
  try {
    if (!trackingAllowed || !safeContext() || !initialize()) return;
    ownedFbq("track", "Contact", {
      content_name: "whatsapp",
      content_category: "veterinary_physiotherapy",
    });
  } catch {
    /* Ad blockers and SDK failures must not block WhatsApp. */
  }
}

// Optional future consent-manager hook. Auto-start is not evidence of consent.
export function setMetaMarketingConsent(granted) {
  trackingAllowed = granted === true;
  try {
    if (!trackingAllowed) {
      if (ownedFbq && window.fbq === ownedFbq) ownedFbq("consent", "revoke");
      return;
    }
    if (initialized && window.fbq === ownedFbq) ownedFbq("consent", "grant");
    trackMetaPageView();
  } catch {
    /* Consent/SDK errors fail closed. */
  }
}

export function setupMetaPixel() {
  if (typeof window === "undefined" || listening) return;
  listening = true;
  window.addEventListener(META_CONSENT_EVENT, (event) => {
    setMetaMarketingConsent(event.detail?.granted === true);
  });
  trackMetaPageView();
}
