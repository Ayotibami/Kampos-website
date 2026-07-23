/* The live Kampos web app — where every "Hop into Kampos" CTA sends people.
   Set REACT_APP_KAMPOS_URL in .env (or Vercel) to change it without touching
   code; falls back to the marketing site if unset. */
export const KAMPOS_APP_URL =
  process.env.REACT_APP_KAMPOS_URL || "https://kampos-website.vercel.app";
