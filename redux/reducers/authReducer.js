import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    CLEAR_AUTH_MSG,
    PREMIUM_BOUGHT
  } from "../Types";
  
  const initialState = {
    isAuthenticated: null,
    msg: null,
    user: null,
  };
  
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          msg: "Login Successfully",
          user: action.payload,
        };
        case PREMIUM_BOUGHT:
        return {
          ...state,
          isAuthenticated: true,
          msg: "Premium Bought Successfully",
          user: action.payload,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isAuthenticated: false,
          msg: "Login Fails",
          user: null,
        };
      case LOGOUT_SUCCESS:
      case CLEAR_AUTH_MSG:
        return {
          ...state,
          isAuthenticated: false,
          msg: "Logout",
          user: null,
        };
      default:
        return state;
    }
  }
  