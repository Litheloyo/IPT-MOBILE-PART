import { GET_ERRORS } from "../actions/actionTypes";
const initialState = {
  authErrors: {},
};
export const authErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        authErrors: action.payload,
      };
    default:
      return state;
  }
};

export default authErrorReducer;
