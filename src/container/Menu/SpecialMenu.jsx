import React from "react";
import { Link } from "react-router-dom";
import {  MenuItem } from "../../components";
import {  data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="events">
    <div className="app__specialMenu-title">
      {/* <SubHeading title="Jaunra of Events!!" /> */}
      <h1 className="headtext__cormorant">Our Events</h1>
    </div>

    <div className="app__specialMenu-menu">
     
        {/* <p className="app__specialMenu-menu_heading">Wine & Beer</p> */}
       
          {data?.wines?.map((menuItem, index) => {
            return<MenuItem  key={index} {...menuItem} />;
           })}
      

      {/* <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="mrnu" />
      </div> */}

      {/* <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktail</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={(cocktail.title, index)}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div> */}
    </div>

    <div style={{ marginTop: "15px" }}>
      <Link to="Events" alt="" className="p__opensans activeStyle" >
      <button type="button" className="custom__button">
        Explore our Events
      </button>
      </Link>
    </div>
  </div>
);

export default SpecialMenu;
