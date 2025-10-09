import "./Header.css";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="kappy-header">
      <div className="kappy-header-div">
        <img src="Images/kappy.png" alt="" />
        Kampos
      </div>
      <nav className="kappy-header-nav">
        <NavLink>Waitlist</NavLink>
        <NavLink to="/chefs">The Chefs</NavLink>
        <NavLink>Hit Us up</NavLink>
      </nav>
    </header>
  );
};

export default Header;
