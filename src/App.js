import React from "react";
import WebsiteContainer from "./components/WebsiteContainer";
import "./App.css";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mark Bernstein's Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@300&display=swap" rel="stylesheet" />
      </Helmet>
      <WebsiteContainer />
    </div>
  );
};

export default App;
