import React from "react";
import "./Hero.scss";
import Navbar from "../Navabar/Navbar";

function Hero() {
  return (
    <>
      <div className="main hero-main">
        <div className="inner-width">
          <Navbar />

          <div className="hero">
            <h1>
              Welcome to NoobFood 🥄🍽  <br /> Where Every Meal is a Masterpiece!
            </h1>
            <p>
              Discover simple, delicious recipes for every craving. From quick
              bites to gourmet delights, let’s turn ingredients into magic.
              Ready to cook? 🍳✨
            </p>
            <div>
                <button className="button"><a href="">Get Started</a></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
