import React from "react";
import styled from "styled-components";
import { mac1, mac2, mac3 } from "../../../assets/img/img";

const ImgMain = styled.div`
  padding: 80px 0px 80px 0px;
  @media (max-width: 1281px) {
    padding: 20px 0px 50px 0px;
  }

  @media (max-width: 430px) {
    padding: 120px 0px 50px 0px;
    margin: 0 auto !important;
  }
`;
const Box = styled.div`
  display: grid;
  gap: 24px;
  grid-column: 1fr 1fr 1fr;
  grid-template-areas: "img2 img1 img3";
  @media (max-width: 885px) {
    grid-template-areas:
      "img1 img2"
      "img3 img3";
  }
  @media (max-width: 801px) {
    gap: 18px;
  }
  @media (max-width: 770px) {
    gap: 16px;
  }
  @media (max-width: 430px) {
    grid-template-areas:
      "img1"
      "img2"
      "img3"
      "img4";
  }
`;
const Img1 = styled.img`
  height: 370px;
  width: 306px;
  grid-area: img1;

  @media (max-width: 1281px) {
    width: 261px;
    height: 315px;
  }
  @media (max-width: 885px) {
    width: 407px;
    height: 505px;
  }
  @media (max-width: 801px) {
    width: 375px;
    height: 470px;
  }
  @media (max-width: 835px) {
    width: 375px;
    height: 470px;
  }
  @media (max-width: 770px) {
    width: 360px;
    height: 435px;
  }
  @media (max-width: 430px) {
    width: 395px;
    height: 488px;
  }
  @media (max-width: 415px) {
    width: 390px;
    height: 472px;
  }
  @media (max-width: 391px) {
    width: 375px;
    height: 425px;
  }
  @media (max-width: 380px) {
    width: 351px;
    height: 425px;
  }
  @media (max-width: 365px) {
    width: 345px;
    height: 380px;
  }
`;
const Img2 = styled.img`
  height: 370px;
  width: 306px;
  grid-area: img2;

  @media (max-width: 1281px) {
    width: 261px;
    height: 315px;
  }
  @media (max-width: 885px) {
    width: 407px;
    height: 505px;
  }

  @media (max-width: 801px) {
    width: 375px;
    height: 470px;
  }
  @media (max-width: 835px) {
    width: 375px;
    height: 470px;
  }
  @media (max-width: 770px) {
    width: 360px;
    height: 435px;
  }
  @media (max-width: 430px) {
    width: 395px;
    height: 488px;
  }
  @media (max-width: 415px) {
    width: 390px;
    height: 472px;
  }
  @media (max-width: 391px) {
    width: 375px;
    height: 425px;
  }
  @media (max-width: 380px) {
    width: 351px;
    height: 425px;
  }
  @media (max-width: 365px) {
    width: 345px;
    height: 380px;
  }
`;
const Img3 = styled.img`
  height: 368px;
  width: 636px;
  grid-area: img3;

  @media (max-width: 1281px) {
    width: 546px;
    height: 316px;
  }
  @media (max-width: 885px) {
    width: 840px;
    height: 498px;
  }
  @media (max-width: 835px) {
    width: 770px;
    height: 469px;
  }
  @media (max-width: 801px) {
    width: 770px;
    height: 469px;
  }
  @media (max-width: 770px) {
    width: 738px;
    height: 431px;
  }
  @media (max-width: 430px) {
    width: 395px;
    height: 234px;
  }
  @media (max-width: 415px) {
    width: 390px;
    height: 226px;
  }
  @media (max-width: 391px) {
    width: 375px;
    height: 250px;
  }
  @media (max-width: 380px) {
    width: 351px;
    height: 203px;
  }
  @media (max-width: 365px) {
    width: 345px;
    height: 200px;
  }
`;

export const Image2 = () => {
  return (
    <ImgMain>
      <div className="container">
        <Box>
          <Img1 src={mac3} />
          <Img2 src={mac2} />
          <Img3 src={mac1} />
        </Box>
      </div>
    </ImgMain>
  );
};
