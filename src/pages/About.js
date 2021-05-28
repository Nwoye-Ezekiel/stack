import React from "react";
import Navbar from "../components/Navbar";
import load from "../images/load.svg";

function About() {
  return (
    <div className="about-cont">
      <Navbar aboutColor="#f58434" />
      <div className="hero-outer-cont">
        <img className="image hero-image" src={load} alt="Efficient Dveloper" />
        <div className="hero-inner-cont">
          <div className="heading hero-heading">Time Stack</div>
          <p className="content hero-content">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
