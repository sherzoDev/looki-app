import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export const addElem = (i) => i.cart;
export const { addElement, deleteTodo } = cart.actions;

export default cart.reducer;
