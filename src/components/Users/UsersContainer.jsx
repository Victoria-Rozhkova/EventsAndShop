import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersSelector } from "../../store/selectors/users-selectors";
import { getUsers } from "../../store/thunks/users-thunks";
import { Users } from "./Users";

export const UsersContainer = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => usersSelector(state));

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Users users={users} />
  );
};