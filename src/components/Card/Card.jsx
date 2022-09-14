import React from "react";
import style from "./Card.module.css";
import '../../MUI.css';
import { useSelector } from "react-redux";
import { CardItem } from "../CardItem/CardItem";

export const Card = () => {
  const phones = useSelector(state => state.phones.phones);
  return (
    <div className={style.Card}>
      {phones.map(phone => {
        return <CardItem key={phone.id} phone={phone} />;
      })}
    </div>
  );
};