import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import "../styles/app.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
    </div>
  );
};

export default App;
