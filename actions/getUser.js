import { GET_USERS } from "./actionTypes";
import axios from "axios";

export const viewUsers = (userData) => (dispatch) => {
  axios
    .get("http://127.0.0.1:8000/api/users", userData)
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
