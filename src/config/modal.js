import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: false,
};
export const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    OpenFunc: (state) => {
      state.value = true;
    },
    CloseFunc: (state) => {
      state.value = false;
    },
    toggleFunc: (state) => {
      state = !state;
    },
  },
});
export const { OpenFunc, CloseFunc, toggleFunc } = modal.actions;

export default modal.reducer;
