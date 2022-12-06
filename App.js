import React from "react";
import RootNavigator from "./navigation/RootNavigator";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
// helps to pass the store down to the rest of the application
import { Provider } from "react-redux";
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
