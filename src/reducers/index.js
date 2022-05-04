import { combineReducers, applyMiddleware, compose } from "redux";
import { reposReducer } from "./reposReducer";
// import { composeWithDevTools } from "react-devtools-extension";

import thunkMiddleware from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

const rootReducers = configureStore({
  reducer: {
    repos: reposReducer
  },
});

const compoceEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore(
  rootReducers,
  compoceEnhancers(applyMiddleware(thunkMiddleware))
);
