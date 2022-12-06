// holds the application's state
// brings reducers and actions together

import { createStore, combineReducers, applyMiddleware } from "redux";
// enables to make asynchronous AJAX request such as fetching data from an API URL
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";

import booksReducer from "./bookReducer";

// persisted reducer
const persistConfig = {
  // key and storage are required to create the config for a persisted reducer
  key: "root",
  //   used to save and persist data
  storage: AsyncStorage,
  //   used to define which object key to use from the initial state to save data
  // if no whitelist is provided, then redux persists both books and bookmarks
  //so we are going to save the data that is in the bookmarks array
  whitelist: ["bookmarks"],
};

const rootReducer = combineReducers({
  booksReducer: persistReducer(persistConfig, booksReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
