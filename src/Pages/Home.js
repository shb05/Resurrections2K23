import React from "react";
import {
  AboutUs,
  Chef,
  // FindUs,
  Gallery,
  Header,
  Intro,
  // Laurels,
  SpecialMenu,
} from "../container";
import "../App.css";

const Home = () => (
  <div>
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    {/* <Laurels /> */}
    <Gallery />
    {/* <FindUs /> */}
  </div>
);

export default Home;
