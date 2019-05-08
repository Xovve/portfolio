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
      others: "Inne...",
      title1: "Prognoza Pogody",
      title2: "Baza Danych Filmów",
      title3: "Platforma Streamingowa",
      title4: "Youtube API App",
      text1:
        "Aplikacja pogodowa oparta na OpenWeather API. Aplikacja wyświetla prognozę pogody po wpisaniu nazwy jakiegokolwiek miasta na świecie.",
      text2:
        "Baza Danych Filmów - aplikacja oparta na TMDb API. Po wpisaniu nazwy filmu i kliknięciu na sugestię, aplikacja wyświetla szczegóły filmu",
      text3:
        "Aplikacja CRUD (Create, Read, Update, Delete) z uwierzytelnianiem użytkownika Google. Pozwala streamować na żywo ekran Twojego komputera za pomocą programu OBS.",
      text4:
        "Aplikacja oparta na Youtube API. Wpisz nazwę filmu, który chcesz wyświetlić, po czym wybierz z listy film, który Cię interesuje."
    },
    eng: {
      header: "My Projects",
      others: "Others...",
      title1: "Weather SPA",
      title2: "Movie Database",
      title3: "Streaming Platform",
      title4: "Youtube API App",
      text1:
        "Weather forecast Single Page Application based on OpenWeather API. Type any city name in the world and get weather forecast for that city.",
      text2:
        "Movie Database application based on TMDb API. Search for a movie title and select one from the suggestions to display movie details.",
      text3:
        "CRUD (Create, Read, Update, Delete) Application with Google Authentication. You can stream your PC / Laptop screen through this app with a help of OBS program.",
      text4:
        "Application based on Youtube API. Type a video name you would like to watch and pick one from the list."
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
            content={getTranslation(translations, props.language, "text2")}
            technologies={[
              "React",
              "Redux",
              "JSX",
              "JavaScript",
              "SASS",
              "axios"
            ]}
            image={moviedb}
            codeHref="https://github.com/Xovve/moviedb"
            liveHref="https://xovve.github.io/moviedb/"
          />
          <Card
            title={getTranslation(translations, props.language, "title3")}
            content={getTranslation(translations, props.language, "text3")}
            technologies={[
              "React",
              "React Router",
              "Redux",
              "JSX",
              "JavaScript",
              "SASS",
              "axios",
              `${getTranslation(translations, props.language, "others")}`
            ]}
            image={stream}
            codeHref="https://github.com/Xovve/streaming-platform"
          />
          <Card
            title={getTranslation(translations, props.language, "title4")}
            content={getTranslation(translations, props.language, "text4")}
            technologies={[
              "React",
              "Redux",
              "JSX",
              "JavaScript",
              "SASS",
              "axios"
            ]}
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
