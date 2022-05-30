import React from "react";
import NavBar from "./Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/about";
import Projects from "../pages/projects";
import Resume from "../pages/resume";

const WebsiteContainer = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>

            <Route path="/projects">
              <Projects />
            </Route>

            <Route path="/resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default WebsiteContainer;
