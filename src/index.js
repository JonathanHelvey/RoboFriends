import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import "tachyons";
import "./index.css";
import App from "../src/containers/App";
import * as serviceWorker from "./serviceWorker";
import { robots } from "./robots";
import { createStore } from "redux";
import { searchRobots } from "./reducer";

const store = createStore(searchRobots);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
