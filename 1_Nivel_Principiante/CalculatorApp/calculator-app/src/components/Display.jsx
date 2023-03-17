import React from "react";
import styles from "../css/Display.module.css";

const Display = ({ input, resultado }) => {
  return (
    <div className={styles.display}>
      <div className={styles.mode}>
        <span className={styles.containerBtn}>
          <button className={`${styles.modeBtn} ${styles.modeLight}`}>☼</button>
          <button className={`${styles.modeBtn} ${styles.modeDark}`}>☽</button>
        </span>
      </div>
      <div className={styles.operation}>{input}</div>
      <div className={styles.result}>{resultado}</div>
    </div>
  );
};

export default Display;
