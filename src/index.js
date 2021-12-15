import React from "react";
import ReactDOM from "react-dom";
import App from "./routes";
import "antd/dist/antd.css";
import "./styles/main.css";
import * as serviceWorker from "./serviceWorker";
// REDUX
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// ROUTE
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById("root")
);

serviceWorker.register();
