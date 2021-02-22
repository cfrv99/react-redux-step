import { combineReducers } from "redux";
import counterReducer from "./counter";
import addUserListReducer from "./userList";

const allReducers = combineReducers({
  counter: counterReducer,
  userList : addUserListReducer
});

export default allReducers;