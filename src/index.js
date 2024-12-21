import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

// تسجيل المكونات الخاصة بـ Chart.js
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
