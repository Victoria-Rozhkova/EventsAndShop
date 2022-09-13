import React from "react";
import { Card } from "../Card/Card";
import style from "./Shop.module.css";

export const Shop = () => {
  return (
    <div className={style.Shop}>
      <h2>Магазин</h2>
      <Card />
    </div>
  );
};