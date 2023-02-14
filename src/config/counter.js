import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 1,
};
const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value >= 10) {
        state.value = 10;
      } else {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value <= 1) {
        state.value = 1;
      } else {
        state.value -= 1;
      }
    },
  },
});
export const count = (i) => i.counter;
export const { increment, decrement } = counter.actions;
export default counter.reducer;
