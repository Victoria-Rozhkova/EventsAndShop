import { Rating } from "@mui/material";
import React, { useState } from "react";
import style from "./Card.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../../MUI.css';
import { useSelector } from "react-redux";

export const Card = () => {
  const phones = useSelector(state => state.phones.phones);
  const [like, setLike] = useState(false);
  return (

    <div className={style.Card}>
      {phones.map(phone => {
        return <>
          <div className={style.Card__imgBlock}>
            <img className={style.Card__imgBlock_img} src={phone.img} alt="phone" />
            <span className={style.Card__imgBlock_percent}>{phone.discount}</span>
            <div className={style.Card__imgBlock_hover}><button className={style.Card__imgBlock_modal}>Быстрый просмотр</button></div>
          </div>
          <p>{phone.price_discount}  {phone.price}</p>
          <p>{phone.price_with_card}</p>
          <p>{phone.brand} / {phone.name} / {phone.screen_diagonal} / {phone.screen_resolution} / {phone.matrix} / {phone.memory}</p>
          <Rating name="size-small" defaultValue={phone.rating} size="small" color="secondary" />{phone.rating_count}
          <div>Рассрочка {phone.installment_plan}</div>
          <button>В корзину</button> <FavoriteIcon onClick={() => setLike(prev => !prev)} color={like ? 'error' : 'secondary'} />;
        </>;
      })}
    </div>
  );
};