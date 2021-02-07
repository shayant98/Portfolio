import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Social from "./components/Social/Social";
import Email from "./components/Email/Email";
import Main from "./components/Main/Main";

ReactDOM.render(
  <div className="h-screen bg-navy-normal">
    <Header />
    <div className="bg-navy-normal">
      <Social />
      <Main />
      <Email />
    </div>
  </div>,
  document.getElementById("root")
);
