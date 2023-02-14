import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  wishlist: [],
};
const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addElement: (state, action) => {
      state.wishlist.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export const addElem = (i) => i.wishlist;
export const { addElement, deleteTodo } = wishlist.actions;

export default wishlist.reducer;
