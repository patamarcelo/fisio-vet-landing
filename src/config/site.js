export const SITE_URL = "https://duda.fisiovet.app";
export const SITE_NAME = "FisioVet · Eduarda Pata";
export const WHATSAPP_NUMBER = "5551992806633";
export const INSTAGRAM_URL = "https://www.instagram.com/fisiovet.eduardapata/";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const GA_MEASUREMENT_ID = "G-T7Z91XP52B";

export function whatsappUrl(
  message = "Olá! Vim pelo site e gostaria de mais informações sobre o atendimento de fisioterapia veterinária domiciliar para meu pet.",
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
