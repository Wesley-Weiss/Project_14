//Galatians 5:22-23 (NIV)
//"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
import Keypad from "./Keypad";
import Screen from "./Screen";
import "./css/app.css";
import { useSelector } from "react-redux";
import type { CalculatorState } from "./types/types";

function App() {
  const { history, input, result } = useSelector(
    (state: CalculatorState) => state
  );

  return (
    <div className="app">
      <Screen hist={history} calculation={input} res={result} />
      <Keypad />
    </div>
  );
}

export default App;
