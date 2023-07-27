import React from "react";
import "./Hero.css";
import { ReactComponent as Vector } from "./Vector.svg";
import { ReactComponent as Img } from "./IMAGE.svg";

const Hero = () => {
  return (
    <div className="hero">
      <ul className="social-media">
        <li>facebook</li>
        <li>instagram</li>
        <li>twitch</li>
      </ul>
      <article>
        <h2>
          <Img />
          future of esports
        </h2>
        <h1>
          Unleash the next generation of gaming
          <Vector />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec
          donec in morbi pulvinar. Enim non pulvinar neque.
        </p>
        <div className="btns">
          <button className="blue-btn">Explore more</button>
          <button>View our team</button>
        </div>
      </article>
      <div className="img-hero"></div>
    </div>
  );
};

export default Hero;
