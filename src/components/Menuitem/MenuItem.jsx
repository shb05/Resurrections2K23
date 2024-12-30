import React from 'react';
// import "MenuItem.js";
import './MenuItem.css';
// import { images } from "../../constants";


const MenuItem = ({ imgUrl }) => (
  <div className="app__menuItem">
    {/* <div className="app__menuItem-head"> */}
      
        <img  src={imgUrl} alt="" />
      

      {/* <div className="app__menuItem-dash" />

      <div className="app__menuItem-price">
        <p className="p__cormorant">{price}</p>
      </div> */}
    {/* </div> */}

    {/* <div className="app__menuItem-sub">
      <p className="p__opensans" style={{ color: '#AAA' }}>{tags}</p>
    </div> */}

    {/* <main class="main">
      <div class="container">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="card-image">
              <img src={imgUrl} alt=""/>
              </div>
            </div>
            
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
          <!-- Add Scrollbar -->
          <div class="swiper-button-next">
            <i class="fas fa-chevron-circle-right arrow-icon"></i>
          </div>
          <div class="swiper-button-prev">
            <i class="fas fa-chevron-circle-left arrow-icon"></i>
          </div>
        </div>
      </div>
    </main> */}
  </div>
);

export default MenuItem;
