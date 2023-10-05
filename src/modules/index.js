import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import board from "./board";
import user from "./user";

const rootReducer = combineReducers({ board, user });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
