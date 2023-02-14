import React from "react";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";
import { FiShoppingCart } from "react-icons/fi";
import "./card.css";
import { AiOutlineHeart } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import { BsSearch, BsShuffle } from "react-icons/bs";
import { OpenFunc } from "../../config/modal";
import { useDispatch } from "react-redux";
import { getInformation } from "../../config/information";
import { addElement } from "../../config/wishlist";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
  box-shadow: 0px 0px 10px lightgrey;
  box-shadow: 0px 10px 10px lightgrey;
  position: relative;
  transition: 1s;
  border: 1px solid lightgrey;

  @media (max-width: 1281px) {
    width: 260px;
  }
  @media (max-width: 835px) {
    width: 240px;
  }
  @media (max-width: 770px) {
    width: 230px;
  }
  @media (max-width: 430px) {
    width: 350px;
    margin: 0 auto;
  }
  @media (max-width: 380px) {
    width: 330px;
    margin: 0 auto;
  }
  @media (max-width: 361px) {
    width: 320px;
    margin: 0 auto;
  }
`;

const Img = styled.img`
  height: 300px;
  width: 100%;
  display: none;

  @media (max-width: 1281px) {
    height: 250px !important;
  }
  @media (max-width: 835px) {
    height: 200px;
  }
  @media (max-width: 770px) {
  }
  @media (max-width: 430px) {
    height: 350px !important;
    margin: 0 auto;
  }
  @media (max-width: 380px) {
    height: 340px;
    margin: 0 auto;
  }
  @media (max-width: 361px) {
    height: 330px;
    margin: 0 auto;
  }
`;
const H1 = styled.h1`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  transition: 0.5s;
  color: #000;

  &:hover {
    transition: 0.5s;
    color: #5a5ac9;
  }
`;
const Texts = styled.div`
  padding: 17px 24px 17px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 430px) {
    gap: 20px;
    padding: 17px 30px 17px 30px;
  }
`;
const PriceBox = styled.div`
  display: flex;
  gap: 178px;
  align-items: center;

  @media (max-width: 1281px) {
    gap: 130px;
  }
  @media (max-width: 835px) {
    gap: 120px;
  }
  @media (max-width: 430px) {
    gap: 170px;
  }
`;
const Price = styled.div`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 430px) {
    font-size: 20px;
  }
`;
const Icon = styled.button`
  padding: 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background-color: #f6f6f6;
  transition: 0.5s;
  border: none;

  &:hover {
    transition: 0.5s;
    background-color: #5a5ac9;
    color: #fff;
  }
`;
const AiOutlineShoppingCar = styled(FiShoppingCart)`
  font-size: 18px;
`;
const HoverICon = styled.div`
  width: 150px;
  height: 48px;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 80%;
  margin-left: 25%;
  justify-content: space-between;
  @media (max-width: 1281px) {
    margin-top: 80%;
    margin-left: 20%;
  }
  @media (max-width: 430px) {
    margin-top: 80%;
    margin-left: 28%;
  }
`;
export default function Card({ props }) {
  const dispatch = useDispatch();
  return (
    <>
      <Box className={"box"}>
        <Img src={props.img} />
        <HoverICon className={"iconHover"}>
          <Zoom>
            <Icon
              onClick={() => {
                dispatch(addElement(props));
              }}
            >
              <AiOutlineHeart />
            </Icon>
          </Zoom>
          <Zoom>
            <Icon>
              <BsShuffle />
            </Icon>
          </Zoom>
          <Zoom>
            <Icon>
              <BsSearch />
            </Icon>
          </Zoom>
        </HoverICon>
        <Texts>
          <H1>{props.titlle}</H1>
          <ReactStars count={5} value={5} size={24} activeColor="#ffd700" />
          <PriceBox>
            <Price>{props.price}</Price>
            <Icon
              onClick={() => {
                dispatch(OpenFunc());
                dispatch(getInformation(props));
              }}
            >
              <AiOutlineShoppingCar />
            </Icon>
          </PriceBox>
        </Texts>
      </Box>
    </>
  );
}
