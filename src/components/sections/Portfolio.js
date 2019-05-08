import React from "react";
import Card from "../Card";
import "../../styles/portfolio.scss";

const Portfolio = props => {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container portfolio__container">
        <h2 className="streamer">Portfolio</h2>
        <div className="portfolio__projects">
          <Card title="Weather SPA" />
          <Card title="Movie Database" />
          <Card title="Streaming Platform" />
          <Card title="Portfolio" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
