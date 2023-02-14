import React from "react";
import { CgClose } from "react-icons/cg";
import style from "./responsive.module.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineHeart,
  BsBag,
  BsSearch,
  BsShuffle,
} from "../../../../assets/icons/icon";
import {
  facebook,
  instagram,
  twitter,
  youtube,
} from "../../../../assets/img/img";
import styled from "styled-components";
const Linkk = styled(Link)`
  color: #000;
`;
const Responsive = ({ props }) => {
  console.log(props);
  return (
    <>
      <div className={style.modal}>
        <div className={style.modal__box}>
          <div className={style.modal__close} onClick={props}>
            <CgClose className={style.modal__closeBtn} />
          </div>
          <ul className={style.modal__list}>
            <li className={style.modal__item}>
              <BsSearch className={style.modal__icon1} />
              Search
            </li>
            <li className={style.modal__item}>
              <BsShuffle className={style.modal__icon1} />
              Compare
            </li>
            <Linkk to={"/wishlist"}>
              <li className={style.modal__item}>
                <AiOutlineHeart className={style.modal__icon1} />
                Wishlist
              </li>
            </Linkk>
            <Linkk to={"/cart"}>
              <li className={style.modal__item}>
                <BsBag className={style.modal__icon1} />
                Shopping Cart
              </li>
            </Linkk>
          </ul>
          <ul className={style.modal__list2}>
            <li className={style.modal__item2}>
              <h4 className={style.modal__text1}>Home</h4>
              <CgClose className={style.modal__icon} />
            </li>
            <li className={style.modal__item2}>
              <h4 className={style.modal__text1}>Shop</h4>
              <CgClose className={style.modal__icon} />
            </li>
            <li className={style.modal__item2}>
              <h4 className={style.modal__text1}>Pages</h4>
              <CgClose className={style.modal__icon} />
            </li>
            <li className={style.modal__item2}>
              <h4 className={style.modal__text1}>Blog</h4>
              <CgClose className={style.modal__icon} />
            </li>
            <li className={style.modal__item2}>
              <h4 className={style.modal__text1}>Contact Us</h4>
              <CgClose className={style.modal__icon} />
            </li>
          </ul>
          <div className={style.modal__imgs}>
            <img className={style.modal__img} src={facebook} alt="img" />
            <img className={style.modal__img} src={twitter} alt="img" />
            <img className={style.modal__img} src={youtube} alt="img" />
            <img className={style.modal__img} src={instagram} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Responsive;
