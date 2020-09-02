import React from "react";
import ReactDom from "react-dom";
import App from "./app";

import "./index.scss";
ReactDom.render(
  <div>
    <h1>Hello1 React!</h1>
    <div>
      <App />
    </div>
  </div>,
  document.getElementById("root")
);
