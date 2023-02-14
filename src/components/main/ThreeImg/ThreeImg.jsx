import React from "react";
import styled from "styled-components";
const Box = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 1281px) {
    gap: 24px;
  }
  @media (max-width: 885px) {
    gap: 15px;
  }
  @media (max-width: 770px) {
    gap: 15px;
  }
  @media (max-width: 430px) {
    flex-wrap: wrap;
    gap: 20px;
  }
`;
const Img1 = styled.img`
  height: 368px;
  width: 636px;
  background-size: cover;
  transition: 1s;

  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
  @media (max-width: 1281px) {
    width: 565px;
    height: 316px;
  }
  @media (max-width: 885px) {
    width: 420px;
    height: 242px;
  }
  @media (max-width: 835px) {
    width: 393px;
    height: 225px;
  }
  @media (max-width: 801px) {
    width: 380px;
    height: 217px;
  }
  @media (max-width: 770px) {
    width: 370px;
    height: 203px;
  }
  @media (max-width: 430px) {
    width: 404px;
    height: 234px;
  }
  @media (max-width: 415px) {
    width: 390px;
    height: 226px;
  }
  @media (max-width: 380px) {
    width: 351px;
    height: 203px;
  }
`;
const Img2 = styled.img`
  transition: 1s;
  height: 370.3625183105469px;
  width: 306px;

  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
  @media (max-width: 1281px) {
    width: 235px;
    height: 316px;
  }
  @media (max-width: 885px) {
    width: 197px;
    height: 242px;
  }
  @media (max-width: 835px) {
    width: 184px;
    height: 225px;
  }
  @media (max-width: 801px) {
    width: 180px;
    height: 217px;
  }
  @media (max-width: 770px) {
    width: 170px;
    height: 203px;
  }
  @media (max-width: 430px) {
    width: 404px;
    height: 488px;
  }
  @media (max-width: 415px) {
    width: 390px;
    height: 472px;
  }
  @media (max-width: 380px) {
    width: 351px;
    height: 425px;
  }
`;
const ImgBox = styled.div`
  overflow: hidden;
`;
const Imgg = styled.div`
  padding: 0px 0px 30px 0px;
`;
export default function ThreeImg({img1,img2,img3,style}) {
  return (
    <>
      <Imgg>
        <div className="container">
          <Box style={style}>
            <ImgBox>
              <Img1 src={img1} alt="img" />
            </ImgBox>
            <ImgBox>
              <Img2 src={img2} alt="img" />
            </ImgBox>
            <ImgBox>
              <Img2 src={img3} alt="img" />
            </ImgBox>
          </Box>
        </div>
      </Imgg>
    </>
  );
}
