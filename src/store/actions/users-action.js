export const SET_USERS = "USERS::SET_USERS";

export const setUsers = (users, totalPage, page, offset) => ({
  type: SET_USERS,
  users,
  totalPage,
  page,
  offset,
});
