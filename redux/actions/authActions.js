import { LOGIN_SUCCESS, LOGOUT_SUCCESS, CLEAR_AUTH_MSG } from "../Types";
import url from "../../config/URL";

export const login = (data) => (dispatch) => {
  console.log(data)
  // LOG IN API CALL
  // Login with password will only gives email and role
  // email
  // role

  // full_name
  // picture
  // email_verified

  // fetch(`${url}/user/save`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ data: data }),
  //   });
  dispatch({
    type: LOGIN_SUCCESS,
    payload: data,
  });
};

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const clearAuthMsg = () => async (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_MSG,
  });
};
