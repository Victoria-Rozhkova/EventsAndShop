import { UsersAPI } from "../../api/users-api";
import { setUsers } from "../actions/users-action";

export const getUsers =
  (offset = 0) =>
  async (dispatch, getState) => {
    const limit = getState().users.limit;
    const data = await UsersAPI.getUsers(limit, offset);
    console.log(data);
    dispatch(setUsers(data.items, data.total, data.page, data.offset));
  };
