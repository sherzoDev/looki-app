import styled from "styled-components";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import "./index.css";
export const Divv = styled.div`
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
  margin-top: 25%;
  margin-right: 1%;

  &:hover {
    transition: 0.5s;
    background-color: #5a5ac9;
  }
  @media screen and (max-width: 430px) {
    display: none;
  }
  @media screen and (max-width: 1281px) {
    margin-top: 20%;
  }
  @media screen and (max-width: 770px) {
    margin-top: 25%;
  }
  @media screen and (max-width: 885px) {
    margin-top: 25%;
  }
`;
export const Divv2 = styled.div`
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
  left: 0;
  margin-top: 25%;
  margin-left: 1%;
  z-index: 1;

  &:hover {
    transition: 0.5s;
    background-color: #5a5ac9;
  }
  @media screen and (max-width: 430px) {
    display: none;
  }

  @media screen and (max-width: 1281px) {
    margin-top: 20%;
  }
  @media screen and (max-width: 770px) {
    margin-top: 25%;
  }

  @media screen and (max-width: 885px) {
    margin-top: 25%;
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
