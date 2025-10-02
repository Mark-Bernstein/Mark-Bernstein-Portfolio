import React from "react";
import NavBar from "./Navigation";
import MenuNav from "./MenuNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../pages/about";
import Projects from "../pages/projects";
import Resume from "../pages/resume";

const WebsiteContainer = () => {
  return (
    <div>
      <Router>
        <MenuNav />
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route path="/">
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
