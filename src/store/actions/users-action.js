export const SET_USERS = "USERS::SET_USERS";
export const DELETE_USER = "USERS::DELETE_USER";
export const TOGGLE_IS_LOADING = "USERS::TOGGLE_IS_LOADING";

export const setUsers = (users, totalPage, page, offset) => ({
  type: SET_USERS,
  users,
  totalPage,
  page,
  offset,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id,
});

export const toggleIsLoading = (isLoading) => ({
  type: TOGGLE_IS_LOADING,
  isLoading,
});
