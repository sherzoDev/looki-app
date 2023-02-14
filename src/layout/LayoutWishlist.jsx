import React from "react";
import Header from "../components/header/Header";
import HeaderS from "../components/header/header.module.scss";
import HeaderTop from "../components/header/headertop/headerTop";
import Footer from "../components/footer/Footer";
import styled from "styled-components";
import Bottom from "../components/footer/FooterBottom/Bottom";
import PageName from "../components/Cart Page/PageName";
import CalculationWish from "../components/Cart-Items/CalculationWish";

export const Ffoter = styled.footer`
  padding: 80px 0px 95px 0px;
  background-color: #efefef;
`;
export default function LayoutWishlist() {
  return (
    <>
      <header id="id" className={HeaderS.header}>
        <HeaderTop />
        <Header />
      </header>
      <main>
        <PageName name="Wishlist"/>
        <CalculationWish/>
      </main>
      <footer>
        <Footer />
        <Bottom />
      </footer>
    </>
  );
}
