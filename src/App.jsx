import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import LayoutCart from "./layout/LayoutCart";
import LayoutWishlist from "./layout/LayoutWishlist";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="/cart" element={<LayoutCart />} />
      <Route path="/wishlist" element={<LayoutWishlist />} />
    </Routes>
  );
};
