import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "./user";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user });

const persistConfig = {
  key: "root",
  storage,
};

const persistor = persistReducer(persistConfig, rootReducer);

const store = createStore(persistor, applyMiddleware(thunk));

export default store;
