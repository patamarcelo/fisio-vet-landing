// Store only the source classification, never raw UTM values or ad identifiers.
const STORAGE_KEY = "fisiovet:paid-instagram:v1";
let paidInstagram = false;

export function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source")?.toLowerCase();
  const medium = params.get("utm_medium")?.toLowerCase();
  const explicitSource = params.has("utm_source") || params.has("utm_medium");
  if (explicitSource) {
    paidInstagram = source === "ig" && medium === "paid_social";
    try {
      if (paidInstagram) window.sessionStorage.setItem(STORAGE_KEY, "1");
      else window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      /* In restricted browsers, keep attribution for this document only. */
    }
  } else {
    try {
      paidInstagram = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      paidInstagram = false;
    }
  }
}

export function isPaidInstagramVisit() {
  return paidInstagram;
}
