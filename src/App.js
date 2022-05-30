import React from "react";
import MainContainer from "./components/MainContainer.js";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mark Bernstein's React Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@300&display=swap" rel="stylesheet" />
      </Helmet>
      <MainContainer />
    </div>
  );
}

export default App;
