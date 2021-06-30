import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import createRootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};

export const history = createBrowserHistory();

const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history)
);

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk, routerMiddleware(history)))
);

export const persistor = persistStore(store);
