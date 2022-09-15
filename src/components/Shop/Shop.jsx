import React from "react";
import style from "./Shop.module.css";
import '../../MUI.css';
import { useSelector } from "react-redux";
import { CardItem } from "../CardItem/CardItem";

export const Shop = () => {
  const phones = useSelector(state => state.phones.phones);
  return (
    <div className={style.Shop}>
      <h2>Магазин</h2>
      <div className={style.Card}>
        {phones.map(phone => {
          return <CardItem key={phone.id} phone={phone} />;
        })}
      </div>
    </div>
  );
};