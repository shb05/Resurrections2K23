import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossedSwords } from "react-icons/gi";
import { Link } from "react-router-dom";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/#home">
          <img src={images.Resurrection} alt="app logo" />
          <img
            id="app__navbar-Txt"
            src={images.ResurrectionTxt}
            alt="app logo"
          />
        </a>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="/#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="/#events">Events</a>
        </li>
        {/* <li className="p__opensans">
          <a href="/#awards">Awards</a>
        </li> */}
        {/* <li className="p__opensans">
          <a href="/#contact">Contact</a>
        </li> */}
      </ul>
      <div className="app__navbar-login">
        <Link to="Sponsors" className="p__opensans activeStyle">
          Sponsors
        </Link>
        <div />
        <Link to="Team" className="p__opensans">
          Our team
        </Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={32}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <GiCrossedSwords
              fontSize={30}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="/#home" onClick={() => setToggleMenu(false)}>Home</a>
              </li>
              <li className="p__opensans">
                <a href="/#about" onClick={() => setToggleMenu(false)}>About</a>
              </li>

              <li className="p__opensans">
                <a href="/#events" onClick={() => setToggleMenu(false)}>Events</a>
              </li>
              {/* <li className="p__opensans">
                <a href="/#awards">Awards</a>
              </li> */}
              {/* <li className="p__opensans">
                <a href="/#contact">Contact</a>
              </li> */}
              <li className="p__opensans">
                <Link to="Sponsors" onClick={() => setToggleMenu(false)}>Sponsors</Link>
              </li>
              <li className="p__opensans">
                <Link to="Team" onClick={() => setToggleMenu(false)}>Team</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
