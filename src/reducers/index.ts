//Galatians 5:22-23 (NIV)
//"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
import type { Action } from "../types/types";

const initialState = {
  history: [] as string[],
  input: "0",
  result: "0",
  typing: false,
};

const calculatorReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "EVALUATE": {
      let sanitizedInput = state.input.replace(/×/g, "*").replace(/÷/g, "/");
      // Prevent evaluation if the last character is an operator
      if (sanitizedInput[sanitizedInput.length - 1].match(/[+\-*/]/)) {
        sanitizedInput = sanitizedInput.slice(0, -1);
      }
      const answer = eval(sanitizedInput);
      (answer);
      return {
        ...state,
        input: answer.toString(),
        result: answer.toString(),
        history: state.history.concat(`${state.input} = ${answer}`),
      };
    }
    case "ADD_VALUE": {
      const sanitizedInput =
        state.input[0] == "0" && state.input[1] != "."
          ? state.input.slice(1)
          : state.input;
      return {
        ...state,
        input: sanitizedInput + action.payload,
      };
    }

    case "ADD_OPERATORS": {
      let updatedInput = state.input;
      let position: number = updatedInput.length - 1;
      while (updatedInput[position].match(/-/)) {
        updatedInput = updatedInput.slice(0, -1);
        position--;
      }
      return {
        ...state,
        input: updatedInput[updatedInput.length - 1].match(/[+×÷]/)
          ? updatedInput.slice(0, -1) + action.payload
          : updatedInput + action.payload,
      };
    }
    case "UPDATE_TYPING_STATUS": {
      return {
        ...state,
        typing: action.payload.typing ?? state.typing,
      };
    }

    case "CLEAR": {
      return {
        ...state,
        history: [] as string[],
        input: "0",
        result: "0",
        typing: false,
      };
    }

    case "ADD_DECIMAL": {
      let sameNumberWithMultipleDecimals = false;
      let i = state.input.length - 1;
      while (i >= 0 && !state.input[i].match(/[+\-×÷]/)) {
        if (state.input[i] === ".") {
          sameNumberWithMultipleDecimals = true;
        }
        i--;
      }

      return {
        ...state,
        input:
          sameNumberWithMultipleDecimals == true
            ? state.input
            : state.input + action.payload,
      };
    }
    case "BACKSPACE": {
      const newInput = state.input.slice(0, -1) || "0";
      return {
        ...state,
        input: newInput,
      };
    }
    default:
      return state;
  }
};

export default calculatorReducer;
