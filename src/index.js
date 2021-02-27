import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Container from "./components/Container";

ReactDOM.render(
  <div className="h-full">
    <Container />
  </div>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("Serviceworker Registered", reg))
    .catch((error) => console.error("Failed to register Serviceworker", error));
}
