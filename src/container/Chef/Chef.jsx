import React from "react";

// import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chef's word" /> */}
      <h1 className="headtext__cormorant">THEME</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          {/* <img src={images.quote} alt="quote" /> */}
          <p className="p__opensans">
            Let's embark on the most dramatic voyage in Bollywood films.
            <br />
            Go back in time to see how cinema shaped from the 1990s to the
            2020s.
            <br />
            Our essence is to use the our Bollywood music, culture, fashion and
            attitude have been passed over generations through our bollywood
            icons.Let's go through the various stages and endeavor to resurrect
            some of them. <br />
            <br />
          </p>
        </div>
        <p className="p__opensans">
          Let's go through the various stages and endeavor to resurrect some of
          them.
        </p>
      </div>
      {/* <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Head Chef</p>
        <img src={images.sign} alt="sign" />
      </div> */}
    </div>
  </div>
);

export default Chef;
