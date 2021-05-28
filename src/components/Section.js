import React from "react";
import Button from "./Button";

function Section(props) {
  return (
    <div className="section-cont">
      <img className="image" src={props.source} alt="Thinking" />
      <div className="content-cont">
        <div className="heading">{props.heading}</div>
        <p className="content">{props.children}</p>
      </div>
      <Button
        link={props.link}
        children={props.btn_name}
        buttonStyle={props.btn_style}
        buttonSize={props.btn_size}
      ></Button>
    </div>
  );
}

export default Section;
