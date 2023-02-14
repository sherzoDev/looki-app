import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import counter from "./counter";
import information from "./information";
import modal from "./modal";
import wishlist from "./wishlist";
export const store = configureStore({
  reducer: {
    modal: modal,
    information,
    cart,
    counter,
    wishlist,
  },
});
