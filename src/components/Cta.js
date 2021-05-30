import React from "react";
import celebration from "../images/celebration.svg";
import Button from "./Button"

function Cta() {
  return (
    <div className="cta">
      <div className="section-cont">
        <img className="image" src={celebration} alt="celebration" />
        <div className="content-cont">
          <div className="heading">Are you Ready?</div>
          <p className="content to-white">
            This is the right time for you to get started and begin to work like
            a professional. Begin today by using the Time Stack app and attain
            your goals as expected. Keep track of your progress by checking the
            statistics of your tasks.
          </p>
        </div>
        <Button
          link="/Statistics"
          children="Statistics"
          buttonStyle="btn-secondary"
        ></Button>
      </div>
    </div>
  );
}

export default Cta;
