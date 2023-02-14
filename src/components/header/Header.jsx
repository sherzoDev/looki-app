import React from "react";
import { Sling as Hamburger } from "hamburger-react";
import { AiOutlineHeart, BsSearch, BsShuffle } from "../../assets/icons/icon";
import Logo from "../../assets/img/logo";
import style from "./header.module.scss";
import List from "./list";
import WishlistModal from "./modal/modal";
import useModal from "../../hooks/useModal";
import CartModal from "./modal/Cart/Cart";
import Responsive from "./modal/ResponsiveModal/Responsive.jsx";
export default function Header() {
  const { isOpen, openModal, closeModal } = useModal();
  const {
    isOpen: second,
    openModal: secondModal,
    closeModal: closedModal,
  } = useModal();

  return (
    <>
      <div className="container">
        <nav className={style.header__nav}>
          <div className={style.header__logo}>
            <Logo />
          </div>
          <List />
          <div className={style.header__tablet}>
            <ul className={style.header__icons}>
              <BsSearch className={style.header__icon} />
              <BsShuffle className={style.header__icon} />
              <AiOutlineHeart
                className={style.header__icon}
                onClick={() => openModal()}
              />
              {isOpen ? <WishlistModal props={closeModal} /> : null}
              <CartModal />
            </ul>
            <div
              className={style.header__burger}
              onClick={() => {
                secondModal();
                console.log(second);
              }}
            >
              <Hamburger
                toggled={second}
                toggle={secondModal}
                rounded
                size={25}
                direction={"left"}
                duration={1}
              />
            </div>
            {second ? <Responsive props={closedModal} /> : null}
          </div>
        </nav>
      </div>
    </>
  );
}
