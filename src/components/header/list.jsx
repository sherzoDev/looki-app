import React from "react";
import { IoIosArrowDown } from "../../assets/icons/icon";
import style from "./header.module.scss";
export default function List() {
  return (
    <ul className={style.header__list}>
      <li className={style.header__item}>
        Home <IoIosArrowDown style={{ fontSize: "14px" }} />
        <div className={style.header__homeDrop}>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Home 1</p>
          </div>
          <div className={style.header__homeItem} style={{ padding: "10px" }}>
            <p className={style.header__item}>Home 2</p>
          </div>
        </div>
      </li>
      <li className={style.header__item}>
        Shop <IoIosArrowDown style={{ fontSize: "14px" }} />
        <div className={style.header__homeDrop}>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>About Page</p>
          </div>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Card Page</p>
          </div>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Chekout Page</p>
          </div>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Register Page</p>
          </div>
          <div className={style.header__homeItem} style={{ padding: "10px" }}>
            <p className={style.header__item}>Account Page</p>
          </div>
        </div>
      </li>
      <li className={style.header__item}>
        Pages
        <IoIosArrowDown style={{ fontSize: "14px" }} />
        <div className={style.header__homeDrop}>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>About Page</p>
          </div>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Card Page</p>
          </div>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Chekout Page</p>
          </div>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Register Page</p>
          </div>
          <div className={style.header_homeItem} style={{ padding: "10px" }}>
            <p className={style.header__item}>Account Page</p>
          </div>
        </div>
      </li>
      <li className={style.header__item}>
        Blog <IoIosArrowDown style={{ fontSize: "14px" }} />
        <div className={style.header__homeDrop}>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Blog Grid</p>
          </div>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
              border: "1px solid transparent",
              borderBottomColor: "#e3e3e3",
            }}
          >
            <p className={style.header__item}>Blog List</p>
          </div>
          <div
            className={style.header__homeItem}
            style={{
              padding: "10px",
            }}
          >
            <p className={style.header__item}>Blog Single</p>
          </div>
        </div>
      </li>
      <li className={style.header__item}>ContactUs</li>
    </ul>
  );
}
