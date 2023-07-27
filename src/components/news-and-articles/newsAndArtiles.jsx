import React from "react";
import "./newsAndArticles.css";
import { ReactComponent as Img } from "./IMAGE.svg";
import Card from "../card/Card";
import img from "./IMAGE.png";
import img1 from "./IMAGE (1).png";
import img2 from "./IMAGE (2).png";
import img3 from "./IMAGE (3).png";
import img4 from "./IMAGE (4).png";

const NewsAndArtiles = () => {
  const titles = [
    "Esports Group teams up with the Indianapolis Colts",
    "NAVI reveals s1mple fifth anniversary",
    "A1esports Shares new picture",
    "T1 unveil partnership with Razer",
    "RX secures content partnership with",
  ];

  const imgs = [img4, img, img1, img2, img3];

  return (
    <div className="news-and-articles">
      <div className="top">
        <div>
          <h2>
            <Img />
            future of esports
          </h2>
          <h1>latest news & articles</h1>
        </div>
        <div className="btn">
          <button>read more</button>
        </div>
      </div>
      <section>
        {titles.map((title, index) => {
          return (
            <Card
              key={index + "card"}
              title={title}
              img={imgs[index]}
              date={"April 2, 2021"}
              size={index === 0 ? "md" : "sm"}
            />
          );
        })}
      </section>
    </div>
  );
};

export default NewsAndArtiles;
