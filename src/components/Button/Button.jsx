import React from "react";
export default function Button({
  clasS,
  type = "button",
  id,
  style,
  onclick,
  children,
}) {
  return (
    <button
      className={clasS}
      type={type}
      id={id}
      style={style}
      onClick={onclick}
    >
      {children}
    </button>
  );
}
