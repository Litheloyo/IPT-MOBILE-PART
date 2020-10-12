import React from "react";
import Main from "./Main";
import { Provider } from "react-redux";
import Store from "./Store";

export default function App() {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>
  );
}
