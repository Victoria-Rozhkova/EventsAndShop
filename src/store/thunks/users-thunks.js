import { UsersAPI } from "../../api/users-api";
import { setUsers, toggleIsLoading } from "../actions/users-action";

export const getUsers =
  (offset = 0) =>
  async (dispatch, getState) => {
    dispatch(toggleIsLoading(true));
    const limit = getState().users.limit;
    const data = await UsersAPI.getUsers(limit, offset);
    dispatch(setUsers(data.items, data.total, data.page, data.offset));
    dispatch(toggleIsLoading(false));
  };
