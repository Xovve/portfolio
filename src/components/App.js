import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "../styles/app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
