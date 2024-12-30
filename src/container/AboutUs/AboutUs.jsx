import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg2  section__padding2"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.Resurrection} alt="G" />
    </div> */}
    <div className="app__aboutus-content_knife flex__center">
        <img src={images.Resurrection} alt="G" />
      </div>

    <div className="app__aboutus-content flex__center ">
      <div className="app__aboutus-content_about ">
        <h1 className="headtext__cormorant">About</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          The fifth edition of Resurrection will be larger , far-reaching and
          better in every manner with the galaxy of intellectuals , distinct
          vision , illuminating ideas and excellency of art since it will be
          constructed from the ground up with the express purpose of becoming
          Pan India's largest cultural event.
        </p>
        {/* <button type="button" className="custom__button">
          Know More
        </button> */}
      </div>

      

      {/* <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad hic
          aliquam at sed mollitia ut recusandae non in impedit facilis aliquid,
          quis odio, reprehenderit voluptatum inventore dolorem. Provident,
          quibusdam?{" "}
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div> */}
    </div>
  </div>
);

export default AboutUs;
