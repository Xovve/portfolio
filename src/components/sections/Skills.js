import React from "react";
import { connect } from "react-redux";
import { getTranslation } from "../LangSwitcher";
import "../../styles/skills.scss";

const Skills = props => {
  const translations = {
    pol: {
      streamer: "Umiejętności",
      text: "Lista technologii, z którymi pracowałem i które znam:"
    },
    eng: {
      streamer: "Skills",
      text: "List of technologies I have worked with and I'm familliar with:"
    }
  };
  return (
    <section className="skills" id="skills">
      <h2 className="streamer streamer--margin2">
        {getTranslation(translations, props.language, "streamer")}
      </h2>
      <div className="container skills__container">
        <div className="skills__content">
          {getTranslation(translations, props.language, "text")}
        </div>
        <div className="list skills__list">
          <div className="list__item">
            <div className="caption">HTML5</div>
            <span
              className="iconify html"
              data-icon="icomoon-free:html-five"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">CSS3</div>
            <span
              className="iconify css"
              data-icon="fa-brands:css3-alt"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">SASS</div>
            <span
              className="iconify sass"
              data-icon="fa-brands:sass"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">JavaScript(ES6)</div>
            <span
              className="iconify js"
              data-icon="zmdi:language-javascript"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">React</div>
            <span
              className="iconify react"
              data-icon="fa-brands:react"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">Redux</div>
            <span
              className="iconify redux"
              data-icon="simple-icons:redux"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">Gulp</div>
            <span
              className="iconify gulp"
              data-icon="fa-brands:gulp"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">Git</div>
            <span
              className="iconify git"
              data-icon="fa-brands:git-alt"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">Webpack</div>
            <span
              className="iconify webpack"
              data-icon="simple-icons:webpack"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">Wordpress</div>
            <span
              className="iconify wordpress"
              data-icon="el:wordpress"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">Magento</div>
            <span
              className="iconify magento"
              data-icon="fa-brands:magento"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">Babel</div>
            <span
              className="iconify babel"
              data-icon="mdi:babel"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">Bootstrap</div>
            <span
              className="iconify bootstrap"
              data-icon="simple-icons:bootstrap"
              data-inline="false"
            />
          </div>
          <div className="list__item">
            <div className="caption">jQuery</div>
            <span
              className="iconify jquery"
              data-icon="mdi:jquery"
              data-inline="false"
            />
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

export default connect(mapStateToProps)(Skills);
