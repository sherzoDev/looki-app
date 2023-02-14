import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  info: [],
};

const information = createSlice({
  name: "information",
  initialState,
  reducers: {
    getInformation: (state, action) => {
      state.info = [];
      state.info.push(action.payload);
    },
  },
});
export const getInfor = (i) => i.information;
export const { getInformation } = information.actions;

export default information.reducer;
