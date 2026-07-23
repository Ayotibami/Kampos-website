import "./Header.css";
import "./Header1.css";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
// import { GiFeather } from "react-icons/gi";

const navLinkClass = ({ isActive }) => (isActive ? "active-link" : "link");

/* Where the "Korner" button points. Set REACT_APP_KORNER_URL in .env (or Vercel)
   to change it without touching code; falls back to the current URL. */
const KORNER_URL =
  process.env.REACT_APP_KORNER_URL || "https://korner-frontend.vercel.app/";

const FEATHER_ORIGIN = { transformOrigin: "12px 12px" };

const MenuIcon = () => (
  <motion.svg
    className="kappy-header-menu-icon"
    viewBox="0 0 24 24"
    fill="none"
    animate={{ rotate: [45, 38, 50, 45, 45] }}
    style={FEATHER_ORIGIN}
    transition={{
      duration: 0.6,
      times: [0, 0.2, 0.4, 0.6, 1],
      repeat: Infinity,
      repeatDelay: 2.4,
      ease: "easeInOut",
    }}
  >
    <path
      d="M12 21.5C7.5 17 5 12.5 5 8.5 5 4.8 8 2 12 2s7 2.8 7 6.5c0 4-2.5 8.5-7 13Z"
      fill="#165abf"
      opacity="0.14"
    />
    <path
      d="M12 21.5C7.5 17 5 12.5 5 8.5 5 4.8 8 2 12 2s7 2.8 7 6.5c0 4-2.5 8.5-7 13Z"
      stroke="#165abf"
      strokeWidth="1.5"
      strokeLinejoin="round"
      fill="none"
    />
    <path d="M12 3.2v18" stroke="#165abf" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    <path d="M12 5.3c-1.5.4-2.6 1.3-3.4 2.4" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 5.3c1.5.4 2.6 1.3 3.4 2.4" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 7.6c-2 .4-3.4 1.5-4.4 2.9" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 7.6c2 .4 3.4 1.5 4.4 2.9" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 10c-2.3.4-3.9 1.7-5 3.2" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 10c2.3.4 3.9 1.7 5 3.2" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 12.6c-2.1.4-3.6 1.5-4.6 2.9" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 12.6c2.1.4 3.6 1.5 4.6 2.9" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 15.2c-1.7.4-2.9 1.2-3.7 2.3" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 15.2c1.7.4 2.9 1.2 3.7 2.3" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 17.8c-1.1.3-1.9.9-2.5 1.6" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
    <path d="M12 17.8c1.1.3 1.9.9 2.5 1.6" stroke="#165abf" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </motion.svg>
);

// --- react-icons GiFeather version, kept for reference — swap back in by
// --- restoring this block and removing the hand-drawn version above.
//
// const MenuIcon = () => (
//   <motion.div
//     className="kappy-header-menu-icon-wrap"
//     animate={{
//       rotate: [0, -12, 10, -8, 6, -3, 0, 0],
//       x: [0, 4, -4, 3, -2, 1, 0, 0],
//       y: [0, -7, 2, -5, 1, -2, 0, 0],
//     }}
//     transition={{
//       duration: 0.85,
//       times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.85, 1],
//       repeat: Infinity,
//       repeatDelay: 2.15,
//       ease: "easeInOut",
//     }}
//   >
//     <motion.div className="kappy-header-menu-icon-layer">
//       <GiFeather className="kappy-header-menu-icon" />
//     </motion.div>
//   </motion.div>
// );

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  return (
    <header className="kappy-header">
      <div className="kappy-header-logo-badge">
        <img src="Images/logo.png" alt="Kampos" className="kappy-header-logo" />
      </div>
      <nav className="kappy-header-nav">
        <NavLink to="/" className={navLinkClass}>
          Kampos
        </NavLink>
        <NavLink to="/chefs" className={navLinkClass}>
          The Chefs
        </NavLink>
        <NavLink to="/contactPage" className={navLinkClass}>
          Hit Us up
        </NavLink>
      </nav>
      <a
        href={KORNER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="kappy-header-korner"
        aria-label="Korner"
      >
        <img
          src="Images/korner-logo-blue.webp"
          alt="Korner"
          className="kappy-header-korner-logo"
          width="520"
          height="178"
        />
      </a>
      {!menuOpen && (
        <nav className="kappy-header-mobile-nav">
          <button
            className={`kappy-header-menu-btn${
              footerVisible ? " kappy-header-menu-btn-hidden" : ""
            }`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </nav>
      )}

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="kappy-header-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
            />
            <motion.div
              className="kappy-header-menu-panel"
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, scale: 0.9 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <NavLink to="/" className={navLinkClass} onClick={closeMenu}>
                Kampos
              </NavLink>
              <NavLink to="/chefs" className={navLinkClass} onClick={closeMenu}>
                The Chefs
              </NavLink>
              <NavLink to="/contactPage" className={navLinkClass} onClick={closeMenu}>
                Hit Us up
              </NavLink>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
