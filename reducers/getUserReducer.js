import { GET_USERS } from "../actions/actionTypes";

const initialState = {
  users: [],
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
export default getUserReducer;
