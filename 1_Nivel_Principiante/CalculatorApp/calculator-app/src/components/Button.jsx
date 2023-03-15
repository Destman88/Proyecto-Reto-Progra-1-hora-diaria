import React from "react";
import styles from "../css/Button.module.css";

const Button = ({ color, dato }) => {
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
    <div className={styles.containerBtn}>
      <button className={`${styles.btn} ${btnColor}`}>{dato}</button>
    </div>
  );
};

export default Button;
