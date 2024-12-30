import React from "react";
import "./card.css";
export const Card = ({ title, description, imgUrl }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="face back">
          <div className="content">
            <span className="stars"></span>
            <h2 className="desc">{title}</h2>
            <p className="desc">{description}</p>
          </div>
        </div>
        <div className="face front">
          <img src={imgUrl} alt="team-Images" />
        </div>
      </div>
    </div>
  );
};
