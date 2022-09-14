import { Modal, Rating } from "@mui/material";
import React, { useState } from "react";
import style from "./CardItem.module.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../../MUI.css';
import { Box } from "@mui/system";
import mir_logo from '../../assets/images/mir-logo.svg';
import sberpay_logo from '../../assets/images/sber-pay-logo.svg';
import sbp_logo from '../../assets/images/sbp_logo.jpg';

export const CardItem = ({ phone }) => {
  const [like, setLike] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 45,
    background: 'white',
    borderRadius: '25px',
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <div className={style.CardItem}>
        <div className={style.CardItem__imgBlock}>
          <img className={style.CardItem__imgBlock_img} src={phone.img} alt="phone" />
          <span className={style.CardItem__imgBlock_percent}>{phone.discount}</span>
          <div className={style.CardItem__imgBlock_hover}><button onClick={handleOpen} className={style.CardItem__imgBlock_modal}>Быстрый просмотр</button></div>
        </div>
        <div className={style.CardItem__price_block}><span className={style.CardItem__price_discount}>{phone.price_discount.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
          minimumFractionDigits: 0,
        })}</span> <span className={style.CardItem__price}> {phone.price.toLocaleString('ru-RU', {
          style: 'currency',
          currency: 'RUB',
          minimumFractionDigits: 0,
        })}</span></div>
        <div className={style.CardItem__price_with_card_Block}>
          <p className={style.CardItem__price_with_card}>{phone.price_with_card.toLocaleString('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
          })}</p>
          <img src={mir_logo} alt="img" />
          <img src={sberpay_logo} alt="img" />
          <img src={sbp_logo} alt="img" /></div>
        <div className={style.CardItem__name}>{phone.brand} / {phone.name} / {phone.screen_diagonal} / {phone.screen_resolution} / {phone.matrix} / {phone.memory}</div>
        <div className={`${style.CardItem__rating} 'CardItem__rating'`}><Rating name="size-small" defaultValue={phone.rating} size="small" color="secondary" />{phone.rating_count}</div>
        <div className={style.CardItem__installment_plan}>Рассрочка {phone.installment_plan}</div>
        <div className={style.CardItem__cartBlock}><button className={style.CardItem__cart}>В корзину</button> <FavoriteIcon onClick={() => setLike(prev => !prev)} color={like ? 'error' : 'secondary'} /></div>
      </div>
      {open && <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles}>
          <img className={style.CardItem__modal_img} onClick={handleClose} src={phone.img} alt="phone" />
        </Box>
      </Modal>}
    </>
  );
};