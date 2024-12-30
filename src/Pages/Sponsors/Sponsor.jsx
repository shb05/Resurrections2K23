import React from "react";
import "./Sponser.css";
export const Logo = ({ imgUrl }) => {
  return (
    <div className="sponsers__logo">
      <img src={imgUrl} alt="Sponsers-Images" />
    </div>
  );
};
