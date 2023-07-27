import React, { useState } from "react";
import "./Character.css";
import { ReactComponent as Img } from "./IMAGE.svg";
import image1 from "./IMAGE (2).png";
import image2 from "./IMAGE (1).png";
import image3 from "./IMAGE (3).png";

const Character = () => {
  const images = [image1, image2, image3];
  const [picked, setPicked] = useState(0);
  const handleClick = (index) => setPicked(index);
  return (
    <div className="character">
      <div className="img-character"> </div>
      <article>
        <h2>
          <Img />
          future of esports
        </h2>
        <h1>Customize your own character</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae.
        </p>
        <div className="images-character">
          {images.map((x, index) => {
            return (
              <img
                key={index + "img"}
                src={x}
                alt={`$x`}
                className={index === picked ? "picked" : ""}
                onClick={() => handleClick(index)}
              />
            );
          })}
        </div>
      </article>
    </div>
  );
};

export default Character;
