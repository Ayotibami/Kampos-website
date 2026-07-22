import { useEffect } from "react";

/* Per-route <title> and meta description for our SPA. Create React App only
   ships one static index.html, so without this every route shares the homepage
   title/description. Google renders client-side JS, so setting these on
   navigation gives each page its own title and snippet in search results and in
   the browser tab. (Link-preview scrapers like WhatsApp don't run JS, so the
   static og: tags in index.html remain the site-wide default.) */

const DEFAULT_TITLE = "Kampos - Your campus life in one app";
const DEFAULT_DESCRIPTION =
  "Kampos connects Nigerian students to their campuses — official updates, announcements, gists and hot takes, all in one place.";

function upsertMeta(selector, create, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

const usePageMeta = ({ title, description } = {}) => {
  useEffect(() => {
    document.title = title || DEFAULT_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;

    upsertMeta(
      'meta[name="description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("name", "description");
        return m;
      },
      desc
    );
    // keep og/twitter text in sync for contexts that do read rendered DOM
    upsertMeta(
      'meta[property="og:title"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:title");
        return m;
      },
      title || DEFAULT_TITLE
    );
    upsertMeta(
      'meta[property="og:description"]',
      () => {
        const m = document.createElement("meta");
        m.setAttribute("property", "og:description");
        return m;
      },
      desc
    );
  }, [title, description]);
};

export default usePageMeta;
