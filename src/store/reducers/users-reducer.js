import {
  DELETE_USER,
  SET_USERS,
  TOGGLE_IS_LOADING,
} from "../actions/users-action";

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
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
