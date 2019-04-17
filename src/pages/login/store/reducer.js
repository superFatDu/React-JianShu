import * as actionTypes from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  logStatus: false,
  account: "123",
  password: "123"
});

export default (state = defaultState, action) => {
  console.log(action);
  if (action.type === actionTypes.HANDLE_LOGIN) {
    if (state.get("account") === action.account && state.get("password") === action.password) {
      return state.set("logStatus", true);
    } else {
      return state;
    }
  }
  if (action.type === actionTypes.HANDLE_LOGOUT) {
    return state.set("logStatus", false);
  }
  return state;
}