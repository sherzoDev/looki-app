import React from "react";
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Carusel2, Paad } from "../responsCarusel/Carusel";
import { Products } from "../../../config/base";
import Card from "../../Card/Card";
import { useSelector } from "react-redux";
import ModalCart from "../Modal/ModalCart";
import { getInfor } from "../../../config/information";

export const Box = styled.div`
  padding: 30px 0px 30px 0px;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  @media (max-width: 430px) {
    margin-bottom: 10px;
  }
`;
export const Line = styled.div`
  height: 2px;
  width: 60px;
  background-color: #5a5ac9;
`;
export const Paragrf = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #565656;
  text-align: center;
  margin-bottom: 0px;
  @media (max-width: 430px) {
    margin-bottom: 10px;
  }
`;
export const Tabin = styled(Tab)`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0em;
  color: #000;
  text-transform: capitalize;
  cursor: pointer;
  text-align: center;
  border: none;
  outline: none;
`;
export const TabListt = styled(TabList)`
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  gap: 33px;
  @media (max-width: 430px) {
    row-gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
`;
export const TabPanell = styled(TabPanel)`
  display: block;
`;
const Pargarf2 = styled.p`
  margin-bottom: 60px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #565656;
  text-align: center;
  @media (max-width: 430px) {
    margin-bottom: 30px;
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
export default function OurProduct() {
  const modal1 = useSelector((state) => state.modal.value);
  const { info } = useSelector(getInfor);
  return (
    <>
      <Box>
        <div className="container">
          <Content>
            <Title>Our products</Title>
            <Line />
            <Pargarf2>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis, culpa?
            </Pargarf2>
          </Content>
          <Tabs>
            <TabListt>
              <Tabin>new products</Tabin>
              <Tabin>onsale</Tabin>
              <Tabin>upcoming products</Tabin>
            </TabListt>
            <TabPanell>
              <Carusel2>
                {Products?.map((i) => (
                  <Paad key={i.id}>
                    <Card  props={i} />
                  </Paad>
                ))}
              </Carusel2>
            </TabPanell>
            <TabPanel>
              <Carusel2>
                {Products?.map((i) => (
                  <Paad key={i.id}>
                    <Card  props={i} />
                  </Paad>
                ))}
              </Carusel2>
            </TabPanel>
            <TabPanel>
              <Carusel2>
                {Products?.map((i) => (
                  <Paad key={i.id}>
                    <Card  props={i} />
                  </Paad>
                ))}
              </Carusel2>
            </TabPanel>
          </Tabs>
          {modal1 ? <ModalCart props={info} /> : null}
        </div>
      </Box>
    </>
  );
}
