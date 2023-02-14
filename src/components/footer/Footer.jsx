import React from "react";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import styled from "styled-components";
import Logo from "../../assets/img/logo";
import { Ffoter } from "../../layout/Layout";
import { Line } from "../main/ourProducts/OurProducts";
const Content = styled.div`
  display: flex;
  gap: 120px;
  cursor: pointer;
  @media (max-width: 1281px) {
    gap: 80px;
  }
  @media (max-width: 890px) {
    flex-direction: column;
  }
  @media (max-width: 430px) {
    gap: 30px;
  }
`;
const Part1 = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transition: 0.5s;

  &:hover {
    color: #ffff;
    transition: 0.5s;
    background-color: #5a5ac9;
  }
`;
const Paragrf = styled.p`
  width: 400px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #565656;
  margin-bottom: 5px;

  @media (max-width: 1281px) {
    width: 350px;
  }
  @media (max-width: 890px) {
    width: 400px;
  }
  @media (max-width: 835px) {
    width: 350px;
  }
  @media (max-width: 770px) {
    width: 330px;
  }
`;
const Title = styled.h1`
  font-family: Poppins;
  width: 105px;
  font-weight: 500;
  font-size: 18px;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5.5px;
`;
const Item = styled.ul`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #565656;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    transform: translateX(5%);
    transition: 0.5s;
    color: #5a5ac9;
  }
`;
const Part2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
const InputBox = styled.div`
  display: flex;
  gap: 19px;
  background-color: #ffff;
  justify-content: space-between;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  @media (max-width: 380px) {
    gap: 10px !important;
  }
`;
const Input = styled.input`
  padding: 13px 11px;
  outline: none;
  border: none;
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 376px) {
    padding: 11px 9px;
  }
`;
const Button = styled.button`
  padding: 15px 20px;
  background-color: #5a5ac9;
  color: white;
  text-transform: capitalize;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border: none;
  font-family: Raleway;
  font-size: 14px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: center;
  @media (max-width: 376px) {
    padding: 13px 18px;
  }
`;
const PartTwo = styled.div`
  display: flex;
  gap: 118px;
  @media (max-width: 1281px) {
    gap: 80px;
  }
  @media (max-width: 890px) {
    gap: 330px;
  }
  @media (max-width: 835px) {
    gap: 280px;
  }
  @media (max-width: 770px) {
    gap: 260px;
  }
  @media (max-width: 430px) {
    gap: 30px;
    flex-direction: column;
  }
`;
const Item1 = styled(Item)`
  width: 397px;
  margin-bottom: 20px;

  @media (max-width: 1281px) {
    width: 370px;
  }
  @media (max-width: 376px) {
    width: 300px;
  }
`;
const PartOne = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 430px) {
    gap: 30px;
    flex-direction: column;
  }
`;
export default function Footer() {
  return (
    <Ffoter>
      <div className="container">
        <Content>
          <PartOne>
            <Part1>
              <Logo />
              <Paragrf>
                We are a team of professional designers and developers that
                create high quality wordpress plugins, Html, React Template.
              </Paragrf>
              <Icons>
                <Icon>
                  <BsInstagram />
                </Icon>
                <Icon>
                  <BsYoutube />
                </Icon>
                <Icon>
                  <BsTwitter />
                </Icon>
                <Icon>
                  <CgFacebook />
                </Icon>
              </Icons>
            </Part1>
            <Part2>
              <Title>Information</Title>
              <Line style={{ marginBottom: "6px" }} />
              <List>
                <Item>About us</Item>
                <Item>Payment</Item>
                <Item>Contact us</Item>
                <Item>Stores </Item>
              </List>
            </Part2>
          </PartOne>
          <PartTwo>
            <Part2>
              <Title>Social Links</Title>
              <Line style={{ marginBottom: "6px" }} />
              <List>
                <Item>New products</Item>
                <Item>Best sales</Item>
                <Item>Payment</Item>
                <Item>Login</Item>
                <Item>My account</Item>
              </List>
            </Part2>
            <Part2>
              <Title>Newsletter</Title>
              <Line style={{ marginBottom: "6px" }} />
              <List>
                <Item1>
                  Subcribe to the TheFace mailing list to receive update on mnew
                  arrivals, special offers and other discount information.
                </Item1>
                <InputBox>
                  <Input placeholder="Your email address" />
                  <Button>Sign up</Button>
                </InputBox>
              </List>
            </Part2>
          </PartTwo>
        </Content>
      </div>
    </Ffoter>
  );
}
