import React from "react";
import celebration from "../images/celebration.svg";
import { Link } from "react-router-dom";

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
        <Link to="/Statistics">
          <button className="btn cta-btn btn-secondary btn-medium">
            Statistics
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cta;
