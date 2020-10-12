import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
const middleware = [thunk];

const initialstate = {};
const store = createStore(
  reducers,
  initialstate,
  composeWithDevTools(applyMiddleware(...middleware) /*devToolsEnhancer()*/)

  //   compose(
  //     applyMiddleware(thunk),
  //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  //   )
);
export default store;
