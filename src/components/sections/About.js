import React from "react";
import { connect } from "react-redux";
import { getTranslation } from "../LangSwitcher";
import face from "../../static/mafejs.jpg";
import "../../styles/about.scss";

const About = props => {
  const translations = {
    pol: {
      text1: "Cześć! :) Witam na stronie mojego portfolio.",
      text2:
        "Nazywam się Maciek, jestem Front-end Web Developerem. Specjalizuję się w tworzeniu nowoczesnych, responsywnych stron w oparciu o technologie ",
      text3: " oraz ",
      text4:
        ". Potrafię także tworzyć podstawowe motywy do Systemu Zarządzania Treścią Wordpress. Obecnie szukam zatrudnienia na stałe. Jeżeli jesteś zainteresowany/a współpracą skontaktuj się ze mną!"
    },
    eng: {
      text1: "Hi there! :) Welcome to my portfolio.",
      text2:
        "My name is Maciek and I'm a Front-end Web Developer. I specialize in creating modern responsive websites based on ",
      text3: " and ",
      text4:
        " technologies. I can also create basic themes for Wordpress Content Managment System. I am currently looking for a permanent job. If you are interested in cooperation feel free to contact me!"
    }
  };
  return (
    <section className="about" id="about">
      <div className="container about__container">
        <img className="about__image" src={face} alt="Maciek face" />
        <div className="data">
          <h3 className="heading">
            {getTranslation(translations, props.language, "text1")}
          </h3>
          <div>
            {getTranslation(translations, props.language, "text2")}
            <a
              className="link about__link color--react"
              href="https://reactjs.org/"
            >
              <span className="meta-data">React</span>
            </a>
            {getTranslation(translations, props.language, "text3")}
            <a
              className="link about__link color--redux"
              href="https://redux.js.org/"
            >
              <span className="meta-data">Redux</span>
            </a>
            {getTranslation(translations, props.language, "text4")}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(About);
