import React from "react";
import { data } from "../../constants";
import { Logo } from "./Sponsor";
import "./Sponser.css";

const Sponsors = () => (
  <div className="app__bg sponsers__wrapper section__padding">
    <h1 className="app__header-h1">Sponsors</h1>
    <h2 className="app__header-h2">Previous</h2>\
    <div className="Sponsers__Logos">
      {data?.sponserimg?.map((logo, index) => {
        return <Logo key={index} {...logo} />;
      })}
    </div>
  </div>
);

export default Sponsors;
