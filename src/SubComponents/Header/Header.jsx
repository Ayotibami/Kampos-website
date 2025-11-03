import "./Header.css";
import "./Header1.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="kappy-header">
      <div className="kappy-header-div">
        <img src="Images/kappy.png" alt="" />
        Kampos
      </div>
      <div className="kappy-mobile-header-div">
        <img src="Images/kappy.png" alt="" />
      </div>
      <nav className="kappy-header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Waitlist
        </NavLink>
        <NavLink
          to="/chefs"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          The Chefs
        </NavLink>
        <NavLink
          to="/contactPage"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          Hit Us up
        </NavLink>
      </nav>
      <nav className="kappy-header-mobile-nav">
        <button>
          <img src="Images/burger.png" alt="" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
