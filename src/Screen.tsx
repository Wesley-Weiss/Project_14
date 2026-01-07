//Galatians 5:22-23 (NIV)
//"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
import { useSelector } from "react-redux";
import "./css/screen.css";
import type { ScreenProps } from "./types/types";
import type { CalculatorState } from "./types/types";

export default function Screen(displayValues: ScreenProps) {
  const { typing } = useSelector((state: CalculatorState) => state);

  return (
    <>
      <div className="frame">
        <div className="display-body">
          <ul className="history">
            {displayValues.hist?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p id="display">
            {typing ? displayValues.calculation : displayValues.res}
          </p>
        </div>
      </div>
    </>
  );
}
