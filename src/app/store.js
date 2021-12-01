import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import customCounterReducer from "../features/customConter/customCounter.Slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    customCounter: customCounterReducer,
  },
});
