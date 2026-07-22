import "./LegalPage.css";

import { useEffect, useState } from "react";
import Header from "../Header/Header";
import KappyHomeFooter from "../KappyHomeFooter/KappyHomeFooter";
import usePageMeta from "../../hooks/usePageMeta";

/* Shared shell for the long-form legal pages (Privacy, Terms, Community
   Guidelines). Gives them a branded hero, a sticky "on this page" table of
   contents with scroll-spy, and a readable content column. Pages pass their
   section list (for the TOC) and write the body as children. */
const LegalPage = ({
  eyebrow,
  title,
  updated,
  intro,
  metaDescription,
  sections = [],
  children,
}) => {
  const [active, setActive] = useState(sections[0]?.id);
  const [tocOpen, setTocOpen] = useState(false); // only affects mobile

  usePageMeta({ title: `${title} - Kampos`, description: metaDescription || intro });

  // Highlight the TOC entry for whichever section is currently in view.
  useEffect(() => {
    if (!sections.length) return;
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  return (
    <main className="legal-page">
      <Header />

      <header className="legal-hero">
        <div className="legal-hero-inner">
          {eyebrow && <p className="legal-eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {updated && <p className="legal-updated">Last updated · {updated}</p>}
          {intro && <p className="legal-intro">{intro}</p>}
        </div>
      </header>

      <div className={`legal-body${sections.length ? "" : " legal-body-solo"}`}>
        {sections.length > 0 && (
          /* Always-visible sticky sidebar on desktop; on mobile the button
             collapses the nav (React-controlled, so it works regardless of the
             browser's native <details> quirks). */
          <aside className={`legal-toc${tocOpen ? " is-open" : ""}`}>
            <button
              type="button"
              className="legal-toc-title"
              aria-expanded={tocOpen}
              onClick={() => setTocOpen((v) => !v)}
            >
              On this page
            </button>
            <nav className="legal-toc-nav">
              <ul>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={active === s.id ? "is-active" : ""}
                      onClick={() => setTocOpen(false)}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
        <article className="legal-content">{children}</article>
      </div>

      <KappyHomeFooter />
    </main>
  );
};

/* A titled, anchor-linked section. `id` must match the TOC entry. */
export const LegalSection = ({ id, title, children }) => (
  <section id={id} className="legal-section">
    <h2>{title}</h2>
    {children}
  </section>
);

/* Highlighted note box for the docs' "Important Note" / "Example" asides. */
export const Callout = ({ label = "Important note", tone = "note", children }) => (
  <aside className={`legal-callout legal-callout-${tone}`}>
    <span className="legal-callout-badge">{label}</span>
    <div className="legal-callout-body">{children}</div>
  </aside>
);

export default LegalPage;
