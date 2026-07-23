# Kampos — marketing site

The public website for **Kampos**, a one-stop campus ecosystem for Nigerian
students. Built with Create React App and deployed on Vercel.

## Getting started

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build into build/
```

## Environment variables

Set in `.env` (committed — none of these are secret) or overridden in Vercel's
project settings, which win at build time.

| Variable | Purpose |
| --- | --- |
| `REACT_APP_SITE_URL` | Absolute base URL used for `og:url` / `og:image`. Link scrapers can't resolve relative paths. No trailing slash. |
| `REACT_APP_WEB3FORMS_KEY` | Web3Forms access key for the Contact, Bug report and Feature request forms. Public by design — Web3Forms keys live in client-side code. |
| `REACT_APP_KORNER_URL` | Destination of the "Korner" button in the header. |

Note: Create React App inlines every `REACT_APP_*` variable into the JS bundle
at build time, so never put a real secret in one.

## Layout

```
src/
  Components/     one folder per route (KappyHome, Chefs, ContactPage, …)
  SubComponents/  shared pieces (Header, Footer, FeedbackForm, orbits, cards)
  api/feedback.js single submission path for all three forms
  constants/      real contact channels (email, WhatsApp, socials)
  hooks/          usePageMeta — per-route <title>/description
  fonts/          Nunito variable font (WOFF2, with TTF fallback)
public/Images/    all artwork, WebP
```

### Routes

`/` · `/chefs` · `/contactPage` · `/report-bug` · `/request-feature` ·
`/privacy` · `/terms` · `/community-guidelines`

Every route except the landing page is code-split with `React.lazy`, so a
visitor doesn't download the legal pages and forms just to see the homepage.

## Forms

Contact, Bug report and Feature request all funnel through `submitFeedback()`
in [`src/api/feedback.js`](src/api/feedback.js), which posts to Web3Forms and
emails the Kampos inbox. Field keys are written as friendly labels ("What went
wrong") because Web3Forms uses them as dashboard column headers. Every field is
sent on every submission — including blanks — so the columns stay consistent.

To move to a real backend later, change that one file; the pages don't care.

## Conventions

- CSS is plain, one file per component, class names prefixed per component
  (`fb-`, `kappy-footer-`, `contact-page-`). Never write bare `img`/`section`
  selectors — the shared Header and Footer render inside every page.
- Hero images stay eager with `fetchPriority="high"`; everything below the fold
  is `loading="lazy"`. Images carry `width`/`height` so the browser reserves
  space (CLS stays at 0).
- Animations go through `framer-motion` and must respect `useReducedMotion()`.
