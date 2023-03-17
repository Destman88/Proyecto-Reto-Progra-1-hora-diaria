import React, { useState } from "react";
import Button from "./Button";
import styles from "../css/Board.module.css";
import { evaluate } from "mathjs";

const Board = ({ setInputValue }) => {
  const [input, setInput] = useState("");

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const handleEquals = () => {
    const result = evaluate(input);
    setInputValue(result);
  };

  const datos = [
    { color: "g", value: "AC", dato: "AC" },
    { color: "g", value: "-", dato: "+/-" },
    { color: "g", value: "%", dato: "%" },
    { color: "r", value: "/", dato: "÷" },
    { color: "w", value: "7", dato: 7 },
    { color: "w", value: "8", dato: 8 },
    { color: "w", value: "9", dato: 9 },
    { color: "r", value: "*", dato: "x" },
    { color: "w", value: "4", dato: 4 },
    { color: "w", value: "5", dato: 5 },
    { color: "w", value: "6", dato: 6 },
    { color: "r", value: "-", dato: "-" },
    { color: "w", value: "1", dato: 1 },
    { color: "w", value: "2", dato: 2 },
    { color: "w", value: "3", dato: 3 },
    { color: "r", value: "+", dato: "+" },
    { color: "w", value: "AC", dato: "⭮" },
    { color: "w", value: "0", dato: "0" },
    { color: "w", value: ".", dato: "•" },
    { color: "r", value: "=", dato: "=" },
  ];
  return (
    <div className={styles.board}>
      {datos.map((e, i) => (
        <Button
          key={i}
          color={e.color}
          value={e.value}
          dato={e.dato}
          agregarInput={agregarInput}
          handleEquals={handleEquals}
        />
      ))}
    </div>
  );
};

export default Board;
