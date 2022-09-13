import React from "react";
import style from "./Users.module.css";
import { Paginator } from "../Paginator/Paginator";
import { UsersTable } from "./UsersTable";

export const Users = ({ users, delUser }) => {
  return (
    <div className={style.Users}>
      <h2>Список пользователей</h2>
      <UsersTable users={users} delUser={delUser} />
      <Paginator />
    </div>
  );
};