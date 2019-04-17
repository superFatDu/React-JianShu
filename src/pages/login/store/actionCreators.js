import * as actionTypes from "./actionTypes";

export const handleLogin = (account, password) => ({
  type: actionTypes.HANDLE_LOGIN,
  account,
  password
});

export const handleLogout = () => ({
  type: actionTypes.HANDLE_LOGOUT
});