import React from "react";
import { shipping1, shipping2, shipping3, shipping4 } from "../../../assets/img/img";
import clas from "./shipping.module.scss";
export default function Shipping() {
  return (
    <>
      <div className={clas.shipping}>
        <div className="container">
          <div className={clas.shipping__box}>
            <ul className={clas.shipping__list}>
              <li className={clas.shipping__item}>
                <img
                  className={clas.shipping__img}
                  src={shipping1}
                  alt="shipping"
                />
                <div className={clas.shipping__texts}>
                  <h1 className={clas.shipping__text1}>Free Shipping</h1>
                  <p className={clas.shipping__text2}>
                    On all orders over $75.00
                  </p>
                </div>
              </li>
              <li className={clas.shipping__item}>
                <img
                  className={clas.shipping__img}
                  src={shipping2}
                  alt="shipping"
                />
                <div className={clas.shipping__texts}>
                  <h1 className={clas.shipping__text1}>Free Returns</h1>
                  <p className={clas.shipping__text2}>
                    Returns are free within 9 days
                  </p>
                </div>
              </li>
              <li className={clas.shipping__item}>
                <img
                  className={clas.shipping__img}
                  src={shipping3}
                  alt="shipping"
                />
                <div className={clas.shipping__texts}>
                  <h1 className={clas.shipping__text1}>100% Payment Secure</h1>
                  <p className={clas.shipping__text2}>
                    Contact us 24 hours a day
                  </p>
                </div>
              </li>
              <li className={clas.shipping__item}>
                <img
                  className={clas.shipping__img}
                  src={shipping4}
                  alt="shipping"
                />
                <div className={clas.shipping__texts}>
                  <h1 className={clas.shipping__text1}>Support 24/7</h1>
                  <p className={clas.shipping__text2}>
                    Contact us 24 hours a day
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
