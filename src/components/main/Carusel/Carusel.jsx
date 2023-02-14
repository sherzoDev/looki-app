import React from "react";
import Slider from "react-slick";
import "./carusel.css";
import { Next, Prev } from "../../Arrows/Arrows";
import { Fade } from "react-reveal";
import Button from "../../Button/Button";
import stil from "../../Button/button.module.scss";
import styled from "styled-components";
const Carusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <Next />,
    prevArrow: <Prev />,
  };
  const Sliderr = styled(Slider)`
    width: 100%;
    height: 768px;

    @media (max-width: 1281px) {
      width: 100%;
      height: 600px;
    }
    @media (max-width: 886px) {
      height: 500px;
    }
    @media (max-width: 430px) {
      height: 400px;
    }
  `;
  return (
    <Sliderr {...settings}>
      <div className="slidee slide1">
        <div className="container">
        <div className="fadeBox">
          <Fade left>
            <h1 className={"fade1"}>Runway Lip Pal;</h1>
          </Fade>
          <Fade right>
            <h1 className={"fade2"}>Lipscare Lipsticks Sale 60% Off</h1>
          </Fade>
          <Fade bottom>
            <div className={"fade3"}>
              <Button clasS={stil.button3}>Shop Now</Button>
            </div>
          </Fade>
        </div>
        </div>
      </div>
      <div className="slidee slide2">
        <div className="container">
        <div className="fadeBox">
          <Fade left>
            <h1 className={"fade1"}>Face Makeup Brush</h1>
          </Fade>
          <Fade right>
            <h1 className={"fade2"}>Skincare Brush Set Sale 30% Off </h1>
          </Fade>
          <Fade bottom>
            <div className={"fade3"}>
              <Button clasS={stil.button3}>Shop Now</Button>
            </div>
          </Fade>
        </div>
        </div>
      </div>
      <div className="slidee slide3">
      <div className="container">

        <div className="fadeBox">
          <Fade left>
            <h1 className={"fade1"}>MORNEVA</h1>
          </Fade>
          <Fade right>
            <h1 className={"fade2"}>Scalpcare Shampoo Sale 30% Off </h1>
          </Fade>
          <Fade bottom>
            <div className={"fade3"}>
              <Button clasS={stil.button3}>Shop Now</Button>
            </div>
          </Fade>
        </div>
        </div>
      </div>
    </Sliderr>
  );
};

export default Carusel;
