import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { FiFacebook } from "react-icons/fi";
import style from "./headerTop.module.scss";
import { BsTelephoneOutbound } from "react-icons/bs";
const HeaderTop = () => {
  return (
    <div className={style.HeaderTop}>
      <div className="container">
        <nav className={style.HeaderTop__nav}>
          <div className={style.HeaderTop__left}>
            <div className={style.HeaderTop__icons}>
              <FiFacebook className={style.HeaderTop__icon} />
              <RxTwitterLogo className={style.HeaderTop__icon} />
              <AiOutlineYoutube className={style.HeaderTop__icon} />
              <AiOutlineInstagram className={style.HeaderTop__icon} />
            </div>
            <h4 className={style.HeaderTop__call}>
              <BsTelephoneOutbound /> (+123)4567890
            </h4>
          </div>
          <div className={style.HeaderTop__right}>
            <select className={style.HeaderTop__select}>
              <option className={style.HeaderTop__option} disabled value={'Setting'} >
                Setting
              </option>
              <option className={style.HeaderTop__option}>Acoount</option>
              <option className={style.HeaderTop__option} value="CheckOut">
                CheckOut
              </option>
              <option className={style.HeaderTop__option} value="SignOut">
                SignOut
              </option>
            </select>
            <select className={style.HeaderTop__select}>
              <option className={style.HeaderTop__option} defaultValue>
                USD $
              </option>
              <option className={style.HeaderTop__option}>Euro</option>
            </select>
            <select className={style.HeaderTop__select}>
              <option className={style.HeaderTop__option} defaultValue>
                English
              </option>
              <option className={style.HeaderTop__option}>Fransuz</option>
            </select>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderTop;
