import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import authErrorReducer from "../reducers/authErrorReducer";
import getUserReducer from "../reducers/getUserReducer";
import registerUserReducer from "../reducers/registerUserReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  authErrors: authErrorReducer,
  users: getUserReducer,
  reguser: registerUserReducer,
});

export default rootReducer;
