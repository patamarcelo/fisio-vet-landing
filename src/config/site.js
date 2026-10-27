export const SITE_URL = "https://duda.fisiovet.app";
export const SITE_NAME = "FisioVet · Eduarda Pata";
export const WHATSAPP_NUMBER = "5551992806633";
export const INSTAGRAM_URL = "https://www.instagram.com/fisiovet.eduardapata/";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const GA_MEASUREMENT_ID = "G-T7Z91XP52B";

export function whatsappUrl(
  message = "Olá! Vim pelo site e gostaria de mais informações sobre o atendimento de fisioterapia veterinária domiciliar para meu pet.",
  fromInstagramAd = false,
) {
  let text = message;
  if (fromInstagramAd) {
    text = message
      .replace(/^Olá! Vim pelo site e /, "Olá! ")
      .replace(/^Olá! ([a-z])/, (_, first) => `Olá! ${first.toUpperCase()}`);
    // Keep the neighborhood field last so the visitor can complete it naturally.
    const promptIndex = text.indexOf(" Meu bairro/cidade é:");
    if (promptIndex >= 0)
      text = `${text.slice(0, promptIndex)} Vim pelo site.${text.slice(promptIndex)}`;
    else text = `${text.trimEnd()} Vim pelo site.`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
