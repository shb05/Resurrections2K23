import React from "react";
import "./Event.css";
export const Domain = ({ imgUrl,moreInfo,registration}) => {
  return (
    <div>
    <div className="Event_Domain">
      <img src={imgUrl} alt="Domains-Images" />
    </div>
    <div className="Event_Buttons">
    <a href={registration} target="_blank" rel="noreferrer" >
    <button type="button" className="custom__button">
          Register here 
    </button>
    </a>
    <a href={moreInfo} target="_blank" rel="noreferrer">
    <button type="button" className="custom__button">
          More Info
    </button>
    </a>
    </div>
    </div>
  );
};