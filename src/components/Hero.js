import React from "react";
import developer from "../images/developer.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="outer-cont hero-outer-cont">
      <img className="image hero-image" src={developer} alt="programmer" />
      <div className="inner-cont">
        <div className="heading hero-heading">
          "Manage your time efficiently"
        </div>
        <p className="content hero-content">
          Time Stack is a time management app that helps to increase your
          productivity level by organizing and managing your time.
        </p>
        <Link to="/Tasks">
          <button className="btn cta-btn btn-primary btn-medium">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
