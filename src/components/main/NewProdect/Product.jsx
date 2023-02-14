import React from "react";
import { Box, Content, Line, Paragrf } from "../ourProducts/OurProducts";
import { Carusel2 } from "../responsCarusel/Carusel";
import { Products } from "../../../config/base";
import Card from "../../Card/Card";
import styled from "styled-components";
const Paragrf2 = styled(Paragrf)`
  @media (max-width: 430px) {
    margin-bottom: 50px;
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
export default function Product() {
  return (
    <Box style={{ marginBottom: "40px" }}>
      <div className="container">
        <Content>
          <Title>New Arrival products</Title>
          <Line />
          <Paragrf2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </Paragrf2>
          <Carusel2>
            {Products?.map((i) =>
              i.category === "new" ? <Card key={i.id} props={i} /> : null
            )}
          </Carusel2>
        </Content>
      </div>
    </Box>
  );
}
