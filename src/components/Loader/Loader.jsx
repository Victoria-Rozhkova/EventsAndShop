import React from "react";
import style from "./Loader.module.css";

export const Loader = ({ classname = '' }) => {
  return (
    <div className={`${style.Loader} ${style[classname]}`}>
      Загрузка...
    </div>
  );
};