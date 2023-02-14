import React from "react";
import styled from "styled-components";
import { bank } from "../../../assets/img/img";

const Box = styled.div`
  background-color: #000;
  color: #fff;
`;
const Content = styled.div`
  padding: 14px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 430px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 10px;
  }
`;
const Title = styled.h1`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
const Span = styled.span`
  color: #5a5ac9;
`;
const Img = styled.img`
  height: 23px;
  width: 286px;
`;
const Bottom = () => {
  return (
    <Box>
      <div className="container">
        <Content>
          <Title>
            Copyright © <Span>Host Themes</Span>. All Rights Reserved
          </Title>
          <Img src={bank} />
        </Content>
      </div>
    </Box>
  );
};

export default Bottom;
