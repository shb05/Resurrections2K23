import React from "react";
import { Card } from "./Card";
import { data } from "../../constants";
import "./Team.css";
import "../../App.css";

const Team = () => (
  <div className="app__bg sponsers__wrapper section__padding">
    <h1 className="app__header-h1">Organisers</h1>
    <div className="cards">
      {data.teamdata.map((card, index) => {
        return <Card key={index} {...card} />;
      })}
    </div>
  </div>
);
export default Team;
