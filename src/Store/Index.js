import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./Reducer/UserReducer";

const rootReducer = combineReducers({ user: userReducer });

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
