import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "./i18n/i18n";
import { Chart, registerables } from "chart.js";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "./store"; // Import the Redux Store

Chart.register(...registerables);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
