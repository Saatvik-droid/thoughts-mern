import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import thoughtsReducer from "./reducers/thoughts";

const authPersistConfig = {
  key: "auth",
  storage: sessionStorage,
};

const thoughtsPersistConfig = {
  key: "thoughts",
  storage: sessionStorage,
};

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  thoughtsState: persistReducer(thoughtsPersistConfig, thoughtsReducer),
  authState: persistReducer(authPersistConfig, authReducer),
  router: connectRouter(history),
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

export const persistor = persistStore(store);
