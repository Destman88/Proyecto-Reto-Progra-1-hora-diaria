import React, { useState, useEffect } from "react";
import Button from "./Button";
import styles from "../css/Board.module.css";
import stylesD from "../css/Display.module.css";
import { evaluate } from "mathjs";

const Board = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [operation, setOperation] = useState("");

  useEffect(() => {
    setOperation(input ? input : "0");
  }, [input]);

  const agregarInput = (val) => {
    setInput(input + val);
  };

  const calculate = () => {
    try {
      const res = evaluate(input);
      setResult(res.toString());
      setOperation(`${input} =`);
    } catch (error) {
      setResult("Error");
    }
  };

  const borrar = () => {
    setInput(input.slice(0, -1));
  };

  const clear = () => {
    setInput("");
    setResult("");
    setOperation("0");
  };

  const datos = [
    { color: "g", value: "AC", dato: "AC", onClick: clear },
    { color: "g", value: "-", dato: "+/-" },
    { color: "g", value: "%", dato: "%" },
    { color: "r", value: "/", dato: "÷" },
    { color: "w", value: "7", dato: 7 },
    { color: "w", value: "8", dato: 8 },
    { color: "w", value: "9", dato: 9 },
    { color: "r", value: "*", dato: "×" },
    { color: "w", value: "4", dato: 4 },
    { color: "w", value: "5", dato: 5 },
    { color: "w", value: "6", dato: 6 },
    { color: "r", value: "-", dato: "-" },
    { color: "w", value: "1", dato: 1 },
    { color: "w", value: "2", dato: 2 },
    { color: "w", value: "3", dato: 3 },
    { color: "r", value: "+", dato: "+" },
    { color: "w", value: "C", dato: "⭮", onClick: borrar },
    { color: "w", value: "0", dato: 0 },
    { color: "w", value: ".", dato: ".", onClick: () => agregarInput(".") },
    { color: "r", value: "=", dato: "=", onClick: calculate },
  ];

  return (
    <>
      <div className={stylesD.display}>
        <div className={stylesD.mode}>
          <span className={stylesD.containerBtn}>
            <button className={`${stylesD.modeBtn} ${stylesD.modeLight}`}>
              ☼
            </button>
            <button className={`${stylesD.modeBtn} ${stylesD.modeDark}`}>
              ☽
            </button>
          </span>
        </div>
        <div className={stylesD.operation}>{operation}</div>
        <div className={stylesD.result}>{result}</div>
      </div>
      <div className={styles.board}>
        {datos.map((e, i) => (
          <Button
            key={i}
            color={e.color}
            value={e.value}
            dato={e.dato}
            onClick={e.onClick}
            agregarInput={agregarInput}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
