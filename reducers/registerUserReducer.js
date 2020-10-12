import { REGISTER_USERS, REGISTERING_USERS } from "../actions/actionTypes";

const initialState = {
  user: [],
  isRegistered: false,
  isRegistering: false,
};

export const registerUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USERS:
      return {
        ...state,
        isRegistered: true,
        user: action.payload,
        isRegistering: false,
      };
    case REGISTERING_USERS:
      return {
        ...state,
        isRegistering: true,
      };
    default:
      return state;
  }
};
export default registerUserReducer;
