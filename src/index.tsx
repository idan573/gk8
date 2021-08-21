import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { LicenseManager } from "ag-grid-enterprise";

LicenseManager.setLicenseKey(
  "Vendor__MultiApp_10Devs19_November_2020__MTYwNTc0NDAwMDAwMA==359b1d2eb89e72d87667a47274ba602b"
);

export const ETHERSCAN_API_KEY = "2VJZPCY15M514YR5H7M7ZYWCVK4KQ4SD7N"; //TODO: Add to env file;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
