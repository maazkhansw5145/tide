import { LOGIN_SUCCESS, LOGOUT_SUCCESS, CLEAR_AUTH_MSG } from "../Types";
import url from "../../config/URL";
import { toast } from "react-toastify";

export const login = (data) => (dispatch) => {
  console.log(data);
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
  toast.success("Logged in successfully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Logout User
export const logout = () => (dispatch) =>{
  dispatch({
    type: LOGOUT_SUCCESS,
  });
  toast.success("Logged out successfully", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const clearAuthMsg = () => async (dispatch) => {
  dispatch({
    type: CLEAR_AUTH_MSG,
  });
};
