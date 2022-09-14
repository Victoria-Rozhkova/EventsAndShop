import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { phonesReducer } from "./reducers/phones-reducer";
import { usersReducer } from "./reducers/users-reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  phones: phonesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
