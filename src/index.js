import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(<App store={store} />, document.getElementById("root"));
serviceWorker.unregister();
