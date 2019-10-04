import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import reducer from "./reducers";

import { createBrowserHistory } from "history";

export const routerHistory = createBrowserHistory();

const getMiddleware = () => {
  let middleware = [thunk];
  if (process.env.NODE_ENV === "development") {
     middleware.push(logger);
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export default () => createStore(reducer, getMiddleware());
