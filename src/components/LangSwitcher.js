import React from "react";
import { connect } from "react-redux";
import { langSwitch } from "../actions";
import "../styles/switcher.scss";
import plicon from "../static/icons/pl.svg";
import gbicon from "../static/icons/gb.svg";

const LangSwitcher = props => {
  const translations = {
    pol: { text1: "Zmień Język:" },
    eng: { text1: "Switch Language:" }
  };

  const onClickHandler = event => {
    props.langSwitch(event.target.lang);
  };
  return (
    <div className="language-switcher">
      <span>{getTranslation(translations, props.language, "text1")}</span>
      <div className="switcher__box">
        <button
          className={
            props.language === "pol"
              ? "switcher__button switcher__button--left active"
              : "switcher__button switcher__button--left"
          }
          lang="pol"
          onClick={onClickHandler}
        >
          <img src={plicon} className="icon pl" lang="pol" />
          POL
        </button>
        <button
          className={
            props.language === "eng"
              ? "switcher__button switcher__button--right active"
              : "switcher__button switcher__button--right"
          }
          lang="eng"
          onClick={onClickHandler}
        >
          <img src={gbicon} className="icon gb" lang="eng" />
          ENG
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

export const getTranslation = (translations, lang, text) => {
  return translations[lang][text];
};

export default connect(
  mapStateToProps,
  { langSwitch }
)(LangSwitcher);
