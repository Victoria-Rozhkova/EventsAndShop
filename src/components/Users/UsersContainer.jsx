import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../store/actions/users-action";
import { usersSelector } from "../../store/selectors/users-selectors";
import { getUsers } from "../../store/thunks/users-thunks";
import { Users } from "./Users";

export const UsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => usersSelector(state));

  const delUser = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Users users={users} delUser={delUser} />
  );
};