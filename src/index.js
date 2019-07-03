import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import "./index.css";
import App from "../src/containers/App";
import * as serviceWorker from "./serviceWorker";
import { robots } from "./robots";

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
