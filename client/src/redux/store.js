import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/es/storage/session";
import thunk from "redux-thunk";

import authReducer from "./reducers/auth";
import thoughtsReducer from "./reducers/thoughts";

const localPersistConfig = {
  key: "local",
  storage,
};

const sessionPersistConfig = {
  key: "session",
  storage: sessionStorage,
};

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  thoughtsState: persistReducer(localPersistConfig, thoughtsReducer),
  authState: persistReducer(sessionPersistConfig, authReducer),
  router: connectRouter(history),
});

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

export const persistor = persistStore(store);
