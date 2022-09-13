import React from "react";
import style from "./Users.module.css";
import { Paginator } from "../Paginator/Paginator";
import { UsersTable } from "./UsersTable";
import { useSelector } from "react-redux";
import { isLoadingSelector } from "../../store/selectors/users-selectors";
import { Loader } from "../Loader/Loader";

export const Users = ({ users, delUser }) => {
  const isLoading = useSelector(state => isLoadingSelector(state));
  return (
    <div className={style.Users}>
      <h2>Список пользователей</h2>
      {isLoading
        ? <Loader />
        : <>
          <UsersTable users={users} delUser={delUser} />
          <Paginator />
        </>}
    </div>
  );
};