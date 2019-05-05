import React from "react";
import { connect } from "react-redux";
import { langSwitch } from "../actions";
import "../styles/switcher.scss";

const LangSwitcher = props => {
  const translations = {
    pol: { text1: "Zmień Język:" },
    eng: { text1: "Switch Language:" }
  };
  return (
    <div className="language-switcher">
      {getTranslation(translations, props.language, "text1")}
      <button
        className="switcher__button switcher__button--left"
        value="pol"
        onClick={e => props.langSwitch(e.target.value)}
      >
        POL
      </button>
      <button
        className="switcher__button switcher__button--right"
        value="eng"
        onClick={e => props.langSwitch(e.target.value)}
      >
        ENG
      </button>
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
