import React from "react";
import LangSwitcher, { getTranslation } from "./LangSwitcher";
import { Link } from "react-scroll";
import { connect } from "react-redux";
import { toggleMenu } from "../actions";
import Hamburger from "./Hamburger";
import Social from "./Social";
import "../styles/menu.scss";

class Menu extends React.Component {
  render() {
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
    const classNames = this.props.isOpened
      ? "menu__slider opened"
      : "menu__slider";
    return (
      <div className="menu">
        <div className="menu__toggler">
          <Hamburger />
        </div>
        <div className={classNames}>
          <div className="container menu__container">
            <div className="menu__nav">
              <LangSwitcher />
              <Link
                className="menu__link"
                to="about"
                smooth={true}
                onClick={this.props.toggleMenu}
              >
                {getTranslation(translations, this.props.language, "about")}
              </Link>
              <Link
                className="menu__link"
                to="portfolio"
                smooth={true}
                onClick={this.props.toggleMenu}
              >
                {getTranslation(translations, this.props.language, "proj")}
              </Link>
              <Link
                className="menu__link"
                to="skills"
                smooth={true}
                onClick={this.props.toggleMenu}
              >
                {getTranslation(translations, this.props.language, "skills")}
              </Link>
              <Link
                className="menu__link"
                to="contact"
                smooth={true}
                onClick={this.props.toggleMenu}
              >
                {getTranslation(translations, this.props.language, "contact")}
              </Link>
            </div>
            <div className="social__wrapper">
              <Social />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isOpened: state.isMenuOpened,
    language: state.language
  };
};

export default connect(
  mapStateToProps,
  { toggleMenu }
)(Menu);
