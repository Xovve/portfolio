import React from "react";
import { connect } from "react-redux";
import { getTranslation } from "../LangSwitcher";
import Menu from "../Menu";
import Navbar from "../Navbar";
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
          "Specjalizuję się w aplikacjach internetowych React / Redux. Obecnie mieszkam w Krakowie.",
        textbutton1: "Szukam pracownika",
        textbutton2: "Zamawiam stronę"
      },
      eng: {
        text1:
          "Specializing in React / Redux web applications. Currently residing in Kraków, Poland.",
        textbutton1: "I'm looking to hire",
        textbutton2: "I want a website"
      }
    };
    return (
      <header className="header" id="header">
        <Menu />
        <div className="container header__container">
          <Navbar />
          <div className="content">
            <h1 className="header__headline">Front-end Web Developer.</h1>
            <p>{getTranslation(translations, language, "text1")}</p>
            <div className="header__nav">
              <Button
                text={getTranslation(translations, language, "textbutton1")}
                className="button button--orange"
              />
              <Button
                text={getTranslation(translations, language, "textbutton2")}
                className="button button--blue m1"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(Header);
