import React from "react";
import "./Card.css";

const Card = ({ img, date, title, size }) => {
  return (
    <div className={`card ${size}`}>
      <img src={img} alt="" />
      <div className="date">{date}</div>
      <div className="title">{title}</div>
    </div>
  );
};

export default Card;
