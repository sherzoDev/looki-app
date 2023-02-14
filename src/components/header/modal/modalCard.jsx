import React from "react";
import { CgClose } from "react-icons/cg";
import { useDispatch } from "react-redux";
import stylee from "./modal.module.scss";

export default function ModalCard({ props,func }) {
  const dispatch = useDispatch();
  return (
    <>
      <li className={stylee.modal__card}>
        <img src={props.img} className={stylee.modal__cardImg} alt="cardImg" />
        <div className={stylee.modal__texts}>
          <p className={stylee.modal__text1}>{props.titlle}</p>
          <p className={stylee.modal__text1}>1 x ${props.price}</p>
        </div>
        <CgClose onClick={() => dispatch(func(props))} />
      </li>
    </>
  );
}
