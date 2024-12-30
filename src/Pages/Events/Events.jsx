import React from "react";
import "../Events/Event.css";
import { data } from "../../constants";
import { Domain } from "./Event";
import EventManual from "../../assets/Event_Manual.pdf";

const Events = () => (
  <div className="app__bg sponsers__wrapper section__padding">
    <h1 className="app__header-h1">Events</h1>
    <div className="Domains_Images">
      {data?.eventDomains?.map((event, index) => {
        return <Domain key={index} {...event} />;
      })}
    </div>
    <div style={{ marginTop: "10em" }}>
    <a href={EventManual} target="_blank" rel="noreferrer">
      <button type="button" className="custom__button">
        Event Manual
      </button>
    </a>
    </div>
  </div>
);
export default Events;
