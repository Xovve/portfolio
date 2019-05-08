import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Portfolio from "./sections/Portfolio";
import "../styles/app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Portfolio />
    </div>
  );
};

export default App;
