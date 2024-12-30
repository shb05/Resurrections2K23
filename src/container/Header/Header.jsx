import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="About" />
      <div className="header-text">
      <img
            id="app__navbar-Txt_2"
            src={images.ResurrectionTxt}
            alt="app logo"
          />
      </div>
      <Link to="Events" alt="" className="p__opensans activeStyle" >
      <button type="button" className="custom__button">
        Explore our Events
      </button>
      </Link>
    </div>
    <div className="app__wrapper_img">
      <img src={images.bollywood} alt="header" />
    </div>
  </div>
);

export default Header;
