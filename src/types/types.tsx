//Galatians 5:22-23 (NIV)
//"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
interface ScreenProps {
  hist: string[];
  calculation: string;
  res: string;
}

interface CalculatorState {
  history: string[];
  input: string;
  result: string;
  typing: boolean;
}

interface Action {
  type: string;
  payload: {
    input?: string;
    result?: string;
    history?: string[];
    typing?: boolean;
  };
}

interface KeypadObject {
  numbers: {
    [key: string]: string;
  };
  operators: {
    [key: string]: string;
  };
  utilities: {
    [key: string]: string;
  };
}

export type { Action };

export type { ScreenProps };

export type { KeypadObject };

export type { CalculatorState };
