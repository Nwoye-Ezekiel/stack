import React from "react";
import { Link } from "react-router-dom";

const STYLES = ["btn-primary", "btn-secondary"];
const SIZES = ["btn-medium", "btn-long", "btn-short"];

const Button = ({ children, buttonStyle, buttonSize, link }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={link}>
      <button
        className={`btn cta-btn ${checkButtonStyle} ${checkButtonSize}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
