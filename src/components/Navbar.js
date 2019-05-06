import React from "react";
import Hamburger from "./Hamburger";
import LangSwitcher from "./LangSwitcher";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <div className="name">MACIEK SROKA</div>
        <div className="title">FRONT-END WEB DEVELOPER</div>
      </div>
      <div className="navbar__menu">
        <LangSwitcher />
        <Hamburger />
      </div>
    </nav>
  );
};

export default Navbar;
