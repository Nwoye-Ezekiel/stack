import React from "react";
import Navbar from "../components/Navbar";
import clock from "../images/clock.png";

function About() {
  window.scrollTo(0, 0);
  return (
    <div className="about-wrapper">
      <div className="about-cont">
        <Navbar aboutColor="#f58434" />
        <div className="outer-cont about-outer-cont">
          <img className="about-image" src={clock} alt="Efficient Dveloper" />
          <div className="inner-cont">
            <div className="heading hero-heading">Time Stack</div>
            <p className="content hero-content">
              Time Stack is a time management platform that serves as an
              effective tool for bridging the productivity gap. With good time
              management, this goal can achieved and Time Stack is the man for
              the job. With the amazing features it provides, you can easily
              create your tasks, set an expiry date for completion with a
              specified priority level and you get to see the statistics of all
              the tasks you have, either completed or uncompleted with a well
              detailed information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
