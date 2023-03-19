import React from "react";
import Board from "./Board";
import styles from "../css/Calculator.module.css";

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <Board />
    </div>
  );
};

export default Calculator;
