import React from "react";
import { Events } from "../Events/Events";
import { UsersContainer } from "../Users/UsersContainer";
import style from "./Home.module.css";

export const Home = () => {
  return (
    <div className={style.Home}>
      <UsersContainer />
      <Events />
    </div>
  );
};