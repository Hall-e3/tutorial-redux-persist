import React from "react";
import RootNavigator from "./navigation/RootNavigator";
import { store } from "./redux/store";
// helps to pass the store down to the rest of the application
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
