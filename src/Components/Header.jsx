import React from 'react'
import "../Styles/HeaderStyles/Header.scss"

import BgShape from "../images/hero/hero-bg.png";
import HeroCar from "../images/hero/main-car.png";

export default function Header() {
return(

    <>
    <section id="home" className="hero-section">
      <div className="container">
        <img className="bg-shape" src={BgShape.src} alt="bg-shape" />
        <div className="hero-content">
          <div className="hero-content__text">
            <h4>Plan your trip now</h4>
            <h1>
              Save <span>big</span> with our car rental
            </h1>
            <p>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="hero-content__text__btns">
              <button
                className="hero-content__text__btns__book-ride"
                to="/"
              >
                Book Ride
              </button>
              <button className="hero-content__text__btns__learn-more" to="/">
                Learn More 
              </button>
            </div>
          </div>

          {/* img */}
          <img
            src={HeroCar.src}
            alt="car-img"
            className="hero-content__car-img"
          />
        </div>
      </div>


    </section>
  </>
)
}