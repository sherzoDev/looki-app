import React from "react";
import stylee from "../modal.module.scss";
import { CgClose } from "react-icons/cg";
import ModalCard from "../modalCard";
import { BsBag } from "react-icons/bs";
import useModal from "../../../../hooks/useModal";
import Button from "../../../Button/Button";
import stil from "../../../Button/button.module.scss";
import { Link } from "react-router-dom";
import { addElem, deleteTodo } from "../../../../config/cart";
import { useSelector } from "react-redux";
export default function CartModal() {
  const { isOpen, openModal, closeModal } = useModal();
  const { cart } = useSelector(addElem);

  return (
    <>
      <BsBag className={stylee.modal__icon} onClick={() => openModal()} />
      {isOpen ? (
        <div className={stylee.modal}>
          <div className={stylee.modal__box}>
            <div className={stylee.modal__close}>
              <h1 className={stylee.modal__title}>Cart</h1>
              <CgClose
                className={stylee.modal__closeBtn}
                onClick={() => closeModal()}
              />
            </div>
            <ul className={stylee.modal__cardList}>
              {cart?.map((i) => (
                <ModalCard key={i.id} func={deleteTodo} props={i} />
              ))}
            </ul>
            <Link to={"/cart"}>
              <Button clasS={stil.button} style={{ marginRight: "10px" }}>
                view cart
              </Button>
            </Link>
            <Button clasS={stil.button2}>Checkout</Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
