import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import thoughtsReducer from "./thoughts";
import authReducer from "./auth";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    thoughtsState: thoughtsReducer,
    authState: authReducer,
  });
