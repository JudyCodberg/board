import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "./user";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user });

const persistConfig = {
  key: "root",
  storage: storage,
};

const perReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(perReducer, applyMiddleware(thunk));

export default store;
