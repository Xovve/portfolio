import { connect } from "react-redux";
import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "../styles/app.scss";

const App = props => {
  return (
    <div className="app" lang={props.language === "pol" ? "pl" : "en"}>
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    language: state.language
  };
};

export default connect(mapStateToProps)(App);
