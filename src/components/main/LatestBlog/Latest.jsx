import React from "react";
import { Content, Line, Paragrf } from "../ourProducts/OurProducts";
import { ImageGallery } from "../../../config/base";
import Cardd from "./Cardd";
import styled from "styled-components";
import Slider from "react-slick";
import { Next, Prev } from "../responsCarusel/Arrows";
const Box = styled.div`
  padding: 30px 0px 0px 0px;
  @media (max-width: 1281px) {
    padding: 0px 0px 0px 0px;
  }
  @media (max-width: 430px) {
    padding: 90px 0px 30px 0px;
  }
`;
const Sliderr = styled(Slider)`
  height: 460px;
  padding: 10px;
  width: 100%;
`;
const Title = styled.h1`
  font-family: Raleway;
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;
const Latest = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Box>
        <div className="container">
          <Content>
            <Title>From Our Latest Blogs</Title>
            <Line />
            <Paragrf>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Dignissimos, repellat.
            </Paragrf>
            <Sliderr {...settings}>
              {ImageGallery?.map((i) => (
                <Cardd key={i.id} props={i} />
              ))}
            </Sliderr>
          </Content>
        </div>
      </Box>
    </div>
  );
};

export default Latest;
