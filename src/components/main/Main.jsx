import React from "react";
import "./Main.css";
import Hero from "../hero/Hero";
import Character from "../character/Character";
import NewsAndArtiles from "../news-and-articles/newsAndArtiles";

const Main = () => {
  return (
    <main>
      <div className="main-hero">
        <div className="container container-hero">
          <Hero />
        </div>
      </div>
      <div className="main-character">
        <div className="container container-character">
          <Character />
        </div>
      </div>
      <div className="main-news-and-articles">
        <div className="container container-news-and-articles">
          <NewsAndArtiles />
        </div>
      </div>
    </main>
  );
};

export default Main;
