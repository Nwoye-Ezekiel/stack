import React from "react";
import { Link } from "react-router-dom";

function Side(props) {
  return (
    <>
      <div className={`side ${props.style}`}>
        <div className="side-logo-name">Time Stack</div>
        <Link className="link" to="/">
          <div className="link-cont">
            <i
              style={{ color: "#000", fontSize: "25px", marginRight: "10px" }}
              className="fas fa-home"
            ></i>
            Home
          </div>
        </Link>
        <Link className="link" to="/About">
          <div className="link-cont">
            <i
              style={{ color: "#000", fontSize: "25px", marginRight: "10px" }}
              className="fas fa-info-circle"
            ></i>
            About
          </div>
        </Link>
        <Link className="link" to="/Tasks">
          <div className="link-cont">
            <i
              style={{ color: "#000", fontSize: "25px", marginRight: "10px" }}
              className="fas fa-tasks"
            ></i>
            My Tasks
          </div>
        </Link>
        <Link className="link" to="/Statistics">
          <div className="link-cont">
            <i
              style={{ color: "#000", fontSize: "25px", marginRight: "10px" }}
              className="fas fa-chart-bar"
            ></i>
            Statistics
          </div>
        </Link>
      </div>
    </>
  );
}

export default Side;
