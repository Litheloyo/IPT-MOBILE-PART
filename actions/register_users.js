import { REGISTERING_USERS, REGISTER_USERS } from "./actionTypes";
import axios from "axios";

export const registerUsers = (userData) => (dispatch) => {
  axios
    .post("http://localhost:8000/api/register", userData)
    .then((res) => {
      dispatch({
        type: REGISTER_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const registering = () => {
  return {
    type: REGISTERING_USERS,
  };
};
