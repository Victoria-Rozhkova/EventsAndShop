import { Rating } from "@mui/material";
import React, { useState } from "react";
import style from "./Card.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../../MUI.css';

export const Card = () => {
  const [like, setLike] = useState(false);
  return (
    <div className={style.Card}>
      <div className={style.Card__imgBlock}>
        <img className={style.Card__imgBlock_img} src="https://technolove.ru/upload/iblock/c30/9e3/orig.jpg" alt="phone" />
        <span className={style.Card__imgBlock_percent}>14%</span>
        <div className={style.Card__imgBlock_hover}><button className={style.Card__imgBlock_modal}>Быстрый просмотр</button></div>
      </div>

      <p></p>
      <p></p>
      <p></p>
      <Rating name="size-small" defaultValue={2} size="small" color="secondary" />
      <div></div>
      <button>В корзину</button> <FavoriteIcon onClick={() => setLike(prev => !prev)} color={like ? 'error' : 'secondary'} />
    </div>
  );
};