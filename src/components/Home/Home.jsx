import React from "react";
import { Events } from "../Events/Events";
import { Users } from "../Users/Users";
import style from "./Home.module.css";

export const Home = () => {
  return (
    <div className={style.Home}>
      <Users />
      <Events />
    </div>
  );
};