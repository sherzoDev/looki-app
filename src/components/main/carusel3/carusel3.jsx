import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import {
  l1,
  l10,
  l11,
  l12,
  l2,
  l3,
  l4,
  l5,
  l6,
  l7,
  l8,
  l9,
} from "../../../assets/img/img";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
const Divv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: black;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0%;
  margin-left: -1%;

  &:hover {
    transition: 0.5s;
    background-color: #5a5ac9;
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const Divv2 = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: black;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  margin-top: 0%;
  margin-left: -1%;

  &:hover {
    transition: 0.5s;
    background-color: #5a5ac9;
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
`;
const NextIcon = styled(MdChevronRight)`
  font-size: 32px;
`;
const PrevIcon = styled(MdChevronLeft)`
  font-size: 32px;
`;
const style = {
  color: "#fff",
  cursor: "pointer",
};
export function Next(props) {
  const { onClick } = props;

  return (
    <Divv onClick={onClick} className={"arrows"}>
      <NextIcon style={style} />
    </Divv>
  );
}
export function Prev(props, { stle }) {
  const { onClick } = props;

  return (
    <Divv2 style={{ stle }} onClick={onClick} className={"arrows"}>
      <PrevIcon style={style} />
    </Divv2>
  );
}

const Box = styled.div`
  padding: 30px;
`;
const Img = styled.img`
  height: 70px;
`;
const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2.5,
        infinite: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
  ],
};
const Carusel3 = () => {
  return (
    <Box>
      <div className="container">
        <div>
          <Slider
            style={{ display: "flex", alignItems: "center" }}
            {...settings}
          >
            <Img src={l1} />
            <Img src={l2} />
            <Img src={l3} />
            <Img src={l4} />
            <Img src={l5} />
            <Img src={l6} />
            <Img src={l7} />
            <Img src={l8} />
            <Img src={l9} />
            <Img src={l10} />
            <Img src={l11} />
            <Img src={l12} />
          </Slider>
        </div>
      </div>
    </Box>
  );
};

export default Carusel3;
