import React from "react";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import "./index.css";
import Button from "../../Button/Button";
import btnStil from "../../Button/button.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CloseFunc } from "../../../config/modal";
import { addElement } from "../../../config/cart";
const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  background-color: #00000076;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 1100px;
  background-color: #fff;
  @media (max-width: 885px) {
    width: 800px;
  }
  @media (max-width: 801px) {
    width: 755px;
  }
  @media (max-width: 430px) {
    width: 400px;
  }
  @media (max-width: 400px) {
    width: 370px;
  }
  @media (max-width: 380px) {
    width: 350px;
  }
`;
const Bottom = styled.div`
  display: flex;
  padding: 50px 30px;
  gap: 50px;
  @media (max-width: 801px) {
    gap: 35px;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    padding: 30px 20px;
    gap: 20px;
  }
  @media (max-width: 380px) {
    flex-direction: column;
    padding: 20px 20px;
    gap: 20px;
  }
`;
const Title = styled.h1`
  font-family: Raleway;
  font-size: 30px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
`;
const Top = styled.div`
  background-color: #000;
  color: #fff;
  display: flex;
  padding: 10px 50px 10px 25%;
  align-items: center;
  justify-content: space-between;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 885px) {
    padding: 10px 50px 10px 15%;
  }
  @media (max-width: 885px) {
    padding: 10px 50px 10px 15%;
  }
  @media (max-width: 430px) {
    padding: 10px 15px 10px 5%;
  }
`;
const Box1 = styled.div`
  display: flex;
  gap: 30px;
  border-right: 1px solid #00000049;
  padding-right: 30px;
  @media (max-width: 800px) {
    padding-right: 10px;
  }
  @media (max-width: 430px) {
    flex-direction: column;
    align-items: flex-start;
    padding-right: 0px;
    border-right: none;
  }
`;
const Box2 = styled.div``;
const Img = styled.img`
  width: 200px;
  height: 200px;
  background-size: cover;
  margin: 0 auto;

  @media (max-width: 380px) {
    width: 150px;
    height: 150px;
  }
`;
const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 430px) {
    align-items: "flex-start";
  }
`;
const ProductName = styled.p`
  font-family: Raleway;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  margin-bottom: 25px;
  width: 200px;
  @media (max-width: 430px) {
    font-family: Poppins;
    font-size: 16px;
    width: 300px;
    margin-bottom: 15px;
  }
`;
const Tittle = styled(Title)`
  color: #ffff;
  font-weight: 500;
  font-family: Poppins;
  font-size: 22px;
  text-align: center;

  @media (max-width: 430px) {
    font-size: 18px;
    line-height: 25px;
  }
`;
const Price = styled.span`
  font-family: Raleway;
  font-weight: 500;
  font-size: 14px;
  color: #000;
`;
const Feature = styled.h1`
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  color: #000;
`;
const Text1 = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
`;
const Btns = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;

  @media (max-width: 885px) {
    flex-direction: column;
    gap: 0px;
  }
`;
const Close = styled(CgClose)`
  font-size: 32px;
  transition: 1s;

  &:hover {
    transition: 1s;
    transform: rotate(-180deg) !important;
  }
`;
const ModalCart = ({ props }) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <div className="contaner">
        <Content>
          <Top>
            <Tittle>Product successfully added to your shopping cart</Tittle>
            <Close onClick={() => dispatch(CloseFunc())} />
          </Top>
          {props?.map((i) => (
            <Bottom key={i.id}>
              <Box1>
                <Img src={i.img} alt="img" />
                <Texts>
                  <ProductName>{i.tittle}</ProductName>
                  <Price>{i.price}</Price>
                  <Feature>
                    Dimension :: <Price>40x60cm</Price>
                  </Feature>
                  <Feature>
                    Quantity :: <Price>1</Price>
                  </Feature>
                </Texts>
              </Box1>

              <Box2>
                <Texts>
                  <Text1>There is 1 item in your cart</Text1>
                  <Feature>
                    Total products :: <Price>$123.72</Price>
                  </Feature>
                  <Feature>
                    Total shipping :: <Price> $7.00</Price>
                  </Feature>
                  <Feature>
                    Taxes :: <Price>$0.00</Price>
                  </Feature>
                  <Feature>
                    Total :: <Price>$130.72 (tax excl.)</Price>
                  </Feature>
                </Texts>
                <Btns>
                  <Link to={"/cart"}>
                    <Button
                      onclick={() => {
                        props.forEach((i) => {
                          dispatch(addElement(i));
                        });
                      }}
                      clasS={btnStil.button2}
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                  <Button
                    onclick={() => dispatch(CloseFunc())}
                    clasS={btnStil.button2}
                  >
                    Proceed to checkout
                  </Button>
                </Btns>
              </Box2>
            </Bottom>
          ))}
        </Content>
      </div>
    </Box>
  );
};

export default ModalCart;
