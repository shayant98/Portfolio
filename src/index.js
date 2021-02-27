import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Container from "./components/Container";

ReactDOM.render(
  <div className="h-full">
    <Container />
  </div>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  serviceWorker.register();
}
