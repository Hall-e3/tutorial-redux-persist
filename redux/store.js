// holds the application's state
// brings reducers and actions together

import { createStore, combineReducers, applyMiddleware } from "redux";
// enables to make asynchronous AJAX request such as fetching data from an API URL
import thunk from "redux-thunk";

import booksReducer from "./reducers";

const rootReducer = combineReducers({ booksReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));
