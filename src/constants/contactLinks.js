/* Single source of truth for Kampos' real contact channels, so the footer, the
   FAQ buttons and anywhere else added later can't drift out of sync. */

/* wa.me needs the international format with no leading zero or plus:
   0911 021 0657 -> 234 911 021 0657 */
const WHATSAPP_NUMBER = "2349110210657";

/* Pre-filled so the chat opens with the user's cursor after "is ". */
const WHATSAPP_GREETING = "Hey Kappy, my name is ";

export const EMAIL_ADDRESS = "kamposkonnect@gmail.com";

export const CONTACT = {
  x: "https://x.com/Kamposapp",
  instagram: "https://instagram.com/Kamposapp",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_GREETING
  )}`,
  email: `mailto:${EMAIL_ADDRESS}`,
};
