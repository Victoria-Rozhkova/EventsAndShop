import { SET_USERS } from "../actions/users-action";

const initialState = {
  isLoading: false,
  users: [],
  limit: 5,
  offset: 0,
  currentPage: 1,
  totalPage: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        totalPage: action.totalPage,
        currentPage: action.page,
        offset: action.offset,
      };
    default:
      return state;
  }
};
