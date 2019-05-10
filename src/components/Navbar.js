import React from "react";
import { Link } from "react-scroll";
import { connect } from "react-redux";
import LangSwitcher, { getTranslation } from "./LangSwitcher";
import { toggleMenu } from "../actions";
import Hamburger from "./Hamburger";
import Social from "./Social";

import "../styles/navbar.scss";

const Navbar = props => {
  const translations = {
    pol: {
      about: "O mnie",
      proj: "Projekty",
      skills: "Umiejętności",
      contact: "Kontakt"
    },
    eng: {
      about: "About",
      proj: "Projects",
      skills: "Skills",
      contact: "Contact"
    }
  };
  const classNames = props.isOpened ? "navbar__nav opened" : "navbar__nav";

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <div className="name">MACIEK SROKA</div>
        <div className="title">FRONT-END WEB DEVELOPER</div>
      </div>
      <div className={classNames}>
        <div className="nav__list">
          <Link
            className="nav__item"
            to="about"
            smooth={true}
            onClick={props.toggleMenu}
          >
            {getTranslation(translations, props.language, "about")}
          </Link>
          <Link
            className="nav__item"
            to="portfolio"
            smooth={true}
            onClick={props.toggleMenu}
          >
            {getTranslation(translations, props.language, "proj")}
          </Link>
          <Link
            className="nav__item"
            to="skills"
            smooth={true}
            onClick={props.toggleMenu}
          >
            {getTranslation(translations, props.language, "skills")}
          </Link>
          <Link
            className="nav__item"
            to="contact"
            smooth={true}
            onClick={props.toggleMenu}
          >
            {getTranslation(translations, props.language, "contact")}
          </Link>
        </div>
        <LangSwitcher />
        <div className="social__wrapper">
          <Social />
        </div>
      </div>
      <div className="navbar__toggler">
        <Hamburger />
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    isOpened: state.isMenuOpened,
    language: state.language
  };
};

export default connect(
  mapStateToProps,
  { toggleMenu }
)(Navbar);
