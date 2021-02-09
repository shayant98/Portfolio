import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Container from "./components/Container";
import { Helmet } from "react-helmet";

ReactDOM.render(
  <div className="h-full">
    <Helmet>
      <title>Shayant Sital</title>
      <meta
        name="description"
        content="Shayant Sital is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."
      />
      <meta
        property="og:description"
        content="Shayant Sital is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."
      />
      <meta property="og:title" content="Shayant Sital" />
      <meta
        property="og:image"
        content="https://shayantsital.com/og.png"
        data-react-helmet="true"
      ></meta>
      <meta
        name="twitter:card"
        content="summary_large_image"
        data-react-helmet="true"
      ></meta>
      <meta
        name="twitter:creator"
        content="@shayant98"
        data-react-helmet="true"
      ></meta>
      <meta
        name="twitter:title"
        content="Shayant Sital"
        data-react-helmet="true"
      ></meta>
      <meta
        property="twitter:description"
        content="Shayant Sital is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between."
      />
      <meta
        name="twitter:image"
        content="https://shayantsital.com/og.png"
        data-react-helmet="true"
      ></meta>
    </Helmet>
    <Container />
  </div>,
  document.getElementById("root")
);
