import axios from "axios";
import {
  GET_ERRORS,
  SET_AUTHENTICATED_USER,
  SET_AUTHENTICATING,
} from "./actionTypes";

export const loginUser = (userData) => (dispatch) => {
  dispatch(setAuthenticating());
  axios
    .post("http://127.0.0.1:8000/api/login", userData)
    .then((res) => {
      dispatch({
        type: SET_AUTHENTICATED_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const setAuthenticating = () => {
  return {
    type: SET_AUTHENTICATING,
  };
};
