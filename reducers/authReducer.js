import {
  SET_AUTHENTICATED_USER,
  SET_AUTHENTICATING,
} from "../actions/actionTypes";

const initialState = {
  user: {},
  isAuthenticated: true,
  isAuthenticating: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        isAuthenticating: false,
      };
    case SET_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: true,
      };
    default:
      return state;
  }
};

export default authReducer;
