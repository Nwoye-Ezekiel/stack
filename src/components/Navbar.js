import React, { useState } from "react";
import { Link } from "react-router-dom";
import Side from "./Side";

function Navbar(props) {
  const [click, setClick] = useState(false);

  const clickHandler = () => {
    return setClick(!click);
  };

  return (
    <>
      <Side style={click ? "nav-side-open" : "nav-side-close"} />
      <nav className="navbar">
        <div className="navbar-cont">
          <div className="logo-name">Time Stack</div>
          <div className="navbar-links">
            <Link className="navbar-link" to="/">
              <div style={{ color: props.homeColor }} className="link-cont">
                Home
              </div>
            </Link>
            <Link className="navbar-link" to="/About">
              <div style={{ color: props.aboutColor }} className="link-cont">
                About
              </div>
            </Link>
            <Link className="navbar-link" to="/Tasks">
              <div style={{ color: props.tasksColor }} className="link-cont">
                My Tasks
              </div>
            </Link>
            <Link className="navbar-link" to="/Statistics">
              <div
                style={{ color: props.statsColor, paddingRight: "0" }}
                className="link-cont"
              >
                Statistics
              </div>
            </Link>
          </div>
          <div onClick={clickHandler} className="hamburger">
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
