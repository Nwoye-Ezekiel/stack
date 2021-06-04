import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <div className="side-style">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <img className="card-image" src={props.source} alt="card" />
      <p className="card-header">{props.card_header}</p>
      <p className="card-content">{props.children}</p>
      <Link className="read-more-link" to="/About">
        <p className="read-more">Read more</p>
      </Link>
    </div>
  );
}

export default Card;