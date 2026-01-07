//Galatians 5:22-23 (NIV)
//"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law." 
export const evaluate = () => ({
    type: "EVALUATE",
});

export const addDecimal = (decimal: string) => ({
    type: "ADD_DECIMAL",
    payload: decimal,
});

export const addValues = (val: string) => ({
  type: "ADD_VALUE",
  payload: val,
});

export const updateTypingStatus = (status: boolean) => ({
  type: "UPDATE_TYPING_STATUS",
    payload: { typing: status },
});

export const clear = () => ({
    type: "CLEAR",
});

export const backspace = () => ({
  type: "BACKSPACE",
});

export const addOperators = (operator: string) => ({
  type: "ADD_OPERATORS",
  payload: operator,
});