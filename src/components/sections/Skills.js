import React from "react";
import { connect } from "react-redux";
import "../../styles/skills.scss";

const Skills = props => {
  return (
    <section className="skills" id="skills">
      <h2 className="streamer">Skills</h2>
      <div className="container skills__container">
        <div className="skills__content">
          I am aware that front-end technologies change every day and there is
          so much information about every programming language / framework /
          library that rating your knowledge about each and every one of them
          seems pretty ignorant. That's why instead of rating them I provide you
          with a list of technologies I have worked with and I'm fammiliar with.
        </div>
        <div className="skills__list">
          <i class="fab fa-html5" />
          <i class="fab fa-css3-alt" />
          <i class="fab fa-sass" />
          <i class="fab fa-js-square" />
          <i class="fab fa-react" />
          <i class="fab fa-gulp" />
          <i class="fab fa-github" />
          <i class="fab fa-wordpress" />
          <i class="fab fa-magento" />
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
