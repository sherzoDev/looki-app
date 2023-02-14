import React from "react";
import stylee from "./modal.module.scss";
import { CgClose } from "react-icons/cg";
import ModalCard from "./modalCard";
import Button from "../../Button/Button";
import stil from "../../Button/button.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { addElem, deleteTodo } from "../../../config/wishlist";
export default function WishlistModal({ props }) {
  const { wishlist } = useSelector(addElem);

  return (
    <>
      <div className={stylee.modal}>
        <div className={stylee.modal__box}>
          <div className={stylee.modal__close}>
            <h1 className={stylee.modal__title}>Wishlist</h1>
            <CgClose className={stylee.modal__closeBtn} onClick={props} />
          </div>
          <ul className={stylee.modal__cardList}>
            {wishlist?.map((i) => (
              <ModalCard key={i.id} func={deleteTodo} props={i} />
            ))}
          </ul>
          <Link to={"/wishlist"}>
            <Button clasS={stil.button}>view wishlist</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
