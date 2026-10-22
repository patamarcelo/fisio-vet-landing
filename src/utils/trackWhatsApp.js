import { trackEvent } from "./trackEvent";
import { trackMetaWhatsAppContact } from "./metaPixel";

const handledEvents = new WeakSet();

// One native interaction -> one Contact, even if a handler is accidentally
// called again for the same event. Separate intentional clicks remain separate.
export function trackWhatsAppClick(event, section) {
  const nativeEvent = event?.nativeEvent ?? event;
  if (!nativeEvent || ![0, 1].includes(nativeEvent.button ?? 0)) return;
  if (handledEvents.has(nativeEvent)) return;
  handledEvents.add(nativeEvent);
  try {
    trackEvent("click_whatsapp", {
      section,
      page_path: window.location.pathname,
    });
  } catch {
    /* Preserve navigation even if the pre-existing GA tracker fails. */
  }
  trackMetaWhatsAppContact();
}
