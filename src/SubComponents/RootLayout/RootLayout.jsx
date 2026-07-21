import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

const SITE_URL = (process.env.REACT_APP_SITE_URL || "").replace(/\/$/, "");

const RootLayout = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Pages with a hash handle their own scroll-to-section.
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  /* Point <link rel="canonical"> at the route actually being viewed.
     index.html ships a static canonical for the homepage; because this is a
     SPA, every route is served that same HTML — so without this each page
     would declare itself the homepage and Google would collapse them all
     into one entry. */
  useEffect(() => {
    if (!SITE_URL) return;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", SITE_URL + pathname);
  }, [pathname]);

  return <Outlet />;
};

export default RootLayout;
