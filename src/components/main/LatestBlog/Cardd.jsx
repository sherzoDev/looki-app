import React from "react";
import styled from "styled-components";
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 302px;
  align-items: flex-start;
  box-shadow: 0px 0px 10px lightgrey;
  box-shadow: 0px 10px 10px lightgrey;
  border: 1px solid lightgrey;
  overflow: hidden;
  padding-bottom: 10px;

  @media (max-width: 1281px) {
    width: 257px;
  }
  @media (max-width: 835px) {
    width: 370px !important;
  }
  @media (max-width: 770px) {
    width: 350px !important;
  }
  @media (max-width: 430px) {
    width: 404px !important;
    margin: 0 auto !important;
  }
  @media (max-width: 415px) {
    width: 370px;
    margin: 0 auto;
  }
  @media (max-width: 391px) {
    width: 355px !important;
    margin: 0 auto;
  }
  @media (max-width: 376px) {
    width: 330px !important;
    margin: 0 auto;
  }
    @media (max-width: 361px) {
    width: 320px !important;
    margin: 0 auto;
  }
 
`;
const Img = styled.img`
  height: 251px;
  width: 100%;
  transition: 1s;
  margin-bottom: 10px;

  &:hover {
    transition: 1s;
    transform: scale(1.1);
  }
  @media (max-width: 1281px) {
    height: 214px;
  }
  @media (max-width: 835px) {
    height: 300px !important;
  }
  @media (max-width: 770px) {
    height: 270px !important;
  }
  @media (max-width: 430px) {
    height: 336px !important;
    margin: 0 auto !important;
  }
  @media (max-width: 391px) {
    height: 305px !important;
  }
  @media (max-width: 415px) {
    height: 325px !important;
  }
  @media (max-width: 361px) {
    height: 293px !important;
  }
  @media (max-width: 376px) {
    height: 310px !important;
  }
`;
const Brend = styled.div`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #5a5ac9;
`;
const Pragrf = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #565656;
`;
const Titlee = styled.h1`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #111111;
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
const Cardd = ({props}) => {
  return (
    <Box>
      <Img src={props.img} />
      <Text>
        <Brend>{props.text1}</Brend>
        <Titlee>{props.titlle}</Titlee>
        <Pragrf>Posted by HasTech 12TH Nov 2023</Pragrf>
      </Text>
    </Box>
  );
};

export default Cardd;
