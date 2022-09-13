import React from "react";
import Form from "../Form/Form";
import style from "./Login.module.css";

export const Login = () => {
  return (
    <div className={style.Login}>
      <h2>Авторизация</h2>
      <Form />
    </div>
  );
};