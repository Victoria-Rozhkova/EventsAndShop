import React, { useEffect } from "react";
import style from "./Users.module.css";
import { Paginator } from "../Paginator/Paginator";
import { UsersTable } from "./UsersTable";
import { useDispatch, useSelector } from "react-redux";
import { isLoadingSelector, usersSelector } from "../../store/selectors/users-selectors";
import { Loader } from "../Loader/Loader";
import { deleteUser } from "../../store/actions/users-action";
import { getUsers } from "../../store/thunks/users-thunks";

export const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => usersSelector(state));
  const isLoading = useSelector(state => isLoadingSelector(state));

  const delUser = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

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