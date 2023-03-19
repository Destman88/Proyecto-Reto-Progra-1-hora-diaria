import React from "react";
import styles from "../css/Button.module.css";

const Button = ({ color, value, dato, onClick, agregarInput }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      agregarInput(value);
    }
  };

  let btnColor = "";
  switch (color) {
    case "w":
      btnColor = styles.btnWhite;
      break;
    case "g":
      btnColor = styles.btnGreen;
      break;
    case "r":
      btnColor = styles.btnRed;
      break;
    default:
      btnColor = "";
      break;
  }

  return (
    <button
      className={`${styles.btn} ${btnColor}`}
      onClick={handleClick}
    >
      {dato}
    </button>
  );
};

export default Button;
