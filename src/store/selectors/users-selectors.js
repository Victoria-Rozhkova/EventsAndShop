export const usersSelector = (state) => {
  return state.users.users;
};
export const currentPageSelector = (state) => {
  return state.users.currentPage;
};
export const limitSelector = (state) => {
  return state.users.limit;
};
export const totalPageSelector = (state) => {
  return state.users.totalPage;
};