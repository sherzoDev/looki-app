import React from "react";
import { img1, img2, img3 } from "../../assets/img/img";
import Carusel from "./Carusel/Carusel";
import Carusel3 from "./carusel3/carusel3";
import { Image2 } from "./img2/Image";
import Latest from "./LatestBlog/Latest";
import Product from "./NewProdect/Product";
import OurProduct from "./ourProducts/OurProducts";
import Shipping from "./shipping/shipping";
import ThreeImg from "./ThreeImg/ThreeImg";

export const Main = () => {
  return (
    <>
      <Carusel />
      <Shipping />
      <ThreeImg img1={img1} img2={img2} img3={img3} />
      <OurProduct />
      <Image2 />
      <Product />
      <Latest />
      <Carusel3 />
    </>
  );
};
