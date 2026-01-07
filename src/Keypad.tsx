//Galatians 5:22-23 (NIV)
//"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
import { useEffect } from "react";
import "./css/keypad.css";
import type { AppDispatch } from "./store";
import type { KeypadObject } from "./types/types";
import {
  addDecimal,
  addOperators,
  addValues,
  backspace,
  clear,
  evaluate,
  updateTypingStatus,
} from "./actions";
import { useDispatch } from "react-redux";

export default function Keypad() {
  const keypadBtns: KeypadObject = {
    numbers: {
      zero: "0",
      one: "1",
      two: "2",
      three: "3",
      four: "4",
      five: "5",
      six: "6",
      seven: "7",
      eight: "8",
      nine: "9",
    },

    operators: {
      add: "+",
      subtract: "-",
      multiply: "×",
      divide: "÷",
    },

    utilities: {
      clear: "C",
      backspace: "⌫",
      decimal: ".",
      equals: "=",
    },
  };

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(addValues(""));
  }, [dispatch]);
  useEffect(() => {
    dispatch(updateTypingStatus(false));
  }, [dispatch]);

  return (
    <>
      <div className="keypad">
        <div className="left-side">
          <div className="numbers">
            {Object.keys(keypadBtns.numbers).map((num, index) => (
              <div
                className="btn"
                key={index}
                id={num}
                onClick={() => {
                  dispatch(addValues(keypadBtns.numbers[num]));
                  dispatch(updateTypingStatus(true));
                }}
              >
                {keypadBtns.numbers[num]}
              </div>
            ))}
          </div>
          <div className="operators">
            {Object.keys(keypadBtns.operators).map((name, index) => (
              <div
                className="btn"
                key={index}
                id={name}
                onClick={() => {
                  if (name != "subtract") {
                    dispatch(addOperators(keypadBtns.operators[name]));
                  } else {
                    dispatch(addValues(keypadBtns.operators[name]));
                  }

                  dispatch(updateTypingStatus(true));
                }}
              >
                {keypadBtns.operators[name]}
              </div>
            ))}
          </div>
        </div>
        <div className="right-side">
          <div className="utilities">
            {Object.keys(keypadBtns.utilities).map((name, index) => (
              <div
                className="btn"
                key={index}
                id={name}
                onClick={() => {
                  switch (name) {
                    case "clear":
                      dispatch(clear());
                      break;
                    case "equals":
                      dispatch(updateTypingStatus(false));
                      dispatch(evaluate());
                      break;
                    case "backspace":
                      dispatch(backspace());
                      break;
                    case "decimal":
                      ("decimal");
                      dispatch(addDecimal(keypadBtns.utilities[name]));
                      dispatch(updateTypingStatus(true));
                      break;
                    default:
                      dispatch(addValues(keypadBtns.utilities[name]));
                      dispatch(updateTypingStatus(true));
                  }
                }}
              >
                {keypadBtns.utilities[name]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
