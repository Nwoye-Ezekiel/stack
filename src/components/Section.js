import React from "react";
import team from "../images/team.svg";

function Section() {
  return (
    <div>
      <div className="section-cont">
        <img className="image" src={team} alt="team" />
        <div className="content-cont">
          <div className="heading">Why choose Time Stack?</div>
          <p className="content">
            This app provides amazing features that assists you in managing your
            time well. All these features makes Time Stack stand out, making it
            a better option in choosing a good time management app. We know you
            are excited already and so without further ado, let's walk you through
            the features.
          </p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Section;
