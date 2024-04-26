import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/main.scss";
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

import { check } from "./api/auth.js";
import { login } from "./store/auth.js";
import { loadCart } from "./store/cart.js";

(async () => {
  const user = await check();

  if (user) {
    store.dispatch(login(user));
  }
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      {/* <BrowserRouter> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </BrowserRouter> */}
    </React.StrictMode>
  );
})();
store.dispatch(loadCart());
