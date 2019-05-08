import React from "react";
import { connect } from "react-redux";
import { getTranslation } from "../LangSwitcher";
import Card from "../Card";
import weatherbg from "../../static/weatherapp.jpg";
import moviedb from "../../static/moviedb.jpg";
import stream from "../../static/stream.jpg";
import ytvideos from "../../static/ytvideos.jpg";
import "../../styles/portfolio.scss";

const Portfolio = props => {
  const translations = {
    pol: {
      header: "Projekty",
      title1: "Prognoza Pogody",
      title2: "Baza Danych Filmów",
      title3: "Platforma Streamingowa",
      title4: "Youtube API App",
      text1: "SPA"
    },
    eng: {
      header: "Projects",
      title1: "Weather SPA",
      title2: "Movie Database",
      title3: "Streaming Platform",
      title4: "Youtube API App",
      text1:
        "Weather forecast Single Page Application based on OpenWeather API. Type any city name in the world and get weather forecast for that city."
    }
  };
  return (
    <section id="portfolio" className="portfolio">
      <div className="container portfolio__container">
        <h2 className="streamer">
          {getTranslation(translations, props.language, "header")}
        </h2>
        <div className="portfolio__projects">
          <Card
            title={getTranslation(translations, props.language, "title1")}
            content={getTranslation(translations, props.language, "text1")}
            technologies={[
              "React",
              "Redux",
              "JSX",
              "JavaScript",
              "SASS",
              "d3.js",
              "axios"
            ]}
            image={weatherbg}
            codeHref="https://github.com/Xovve/WeatherApp"
            liveHref="https://xovve.github.io/WeatherApp/"
          />
          <Card
            title={getTranslation(translations, props.language, "title2")}
            content="Movie Database project based on TMDb API. Search for a movie title and select one from the suggestions to display movie details."
            technologies={["React", "Redux", "JSX", "JavaScript", "SASS"]}
            image={moviedb}
            codeHref="https://github.com/Xovve/moviedb"
            liveHref="https://xovve.github.io/moviedb/"
          />
          <Card
            title={getTranslation(translations, props.language, "title3")}
            content="CRUD (Create, Read, Update, Delete) Application with Google Authentication. You can stream your PC / Laptop screen through this app with a help of OBS program."
            technologies={[
              "React",
              "React Router",
              "Redux",
              "JSX",
              "JavaScript",
              "SASS"
            ]}
            image={stream}
            codeHref="https://github.com/Xovve/streaming-platform"
          />
          <Card
            title={getTranslation(translations, props.language, "title4")}
            content="Application based on Youtube API. Type a video name you would like to watch and pick one from the list."
            technologies={["React", "Redux", "JSX", "JavaScript", "SASS"]}
            image={ytvideos}
            codeHref="https://github.com/Xovve/ytvideos"
            liveHref="https://xovve.github.io/ytvideos/"
          />
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

export default connect(mapStateToProps)(Portfolio);
