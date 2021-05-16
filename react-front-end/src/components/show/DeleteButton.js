import React from "react";
import "./DeleteButton.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn-test", "btn--delete"];

const SIZES = ["btn--medium", "btn--large", "btn--deleted"];

export const DeleteButton = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  to,
  path,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={to} className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        path={path}
      >
        {children}
      </button>
    </Link>
  );
};
