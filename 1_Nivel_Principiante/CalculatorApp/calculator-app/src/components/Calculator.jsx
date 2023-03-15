import React from "react";
import Board from "./Board";
import styles from "../css/Calculator.module.css";
import Display from "./Display";

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <Display />
      <Board />
    </div>
  );
};

export default Calculator;
