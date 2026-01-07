//Galatians 5:22-23 (NIV)
//"But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law."
import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./reducers";

export const store = configureStore({
  reducer: calculatorReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
