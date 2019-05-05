import React from "react";
import Hamburger from "../Hamburger";
import { connect } from "react-redux";
import LangSwitcher, { getTranslation } from "../LangSwitcher";
import Button from "../Button";
import "../../styles/header.scss";

class Header extends React.Component {
  componentDidMount() {
    this.effect = window.VANTA.DOTS({
      el: "#header",
      color: 0xee5b2c,
      color2: 0xee5b2c,
      backgroundColor: 0x001234,
      size: 5.6,
      spacing: 34.0
    });
  }
  componentWillUnmount() {
    if (this.effect) this.effect.destroy();
  }
  render() {
    const { language } = this.props;
    const translations = {
      pol: {
        text1:
          "Specjalizuję się w aplikacjach internetowych React / Redux. Obecnie mieszkam w Krakowie"
      },
      eng: {
        text1:
          "Specializing in React / Redux web applications. Currently residing in Kraków, Poland"
      }
    };
    return (
      <div className="header" id="header">
        <div className="container header__container">
          <nav className="navbar">
            <div className="navbar__brand">
              <div className="name">MACIEJ SROKA</div>
              <div className="title">FRONT-END WEB DEVELOPER</div>
            </div>
            <div className="navbar__menu">
              <LangSwitcher />
              <Hamburger />
            </div>
          </nav>
          <h2 className="header__headline">Front-end Web Developer.</h2>
          <p>{getTranslation(translations, language, "text1")}</p>
          <div className="header__nav">
            <Button
              text="I'm looking to hire"
              className="button button--orange"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(Header);
