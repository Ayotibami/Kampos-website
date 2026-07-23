import "./PageLoader.css";

/* Shown while a code-split route's chunk downloads. Chunks are small and
   usually arrive in a few hundred milliseconds, so this is deliberately quiet:
   the spinner fades in after a short delay (see the CSS) rather than flashing
   on every navigation. */
const PageLoader = () => (
  <div className="page-loader" role="status" aria-live="polite">
    <span className="page-loader-dot" />
    <span className="visually-hidden">Loading…</span>
  </div>
);

export default PageLoader;
