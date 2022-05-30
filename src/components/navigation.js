import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "../css/nav.css";
import NavSpacer from "./navspacer";
import { makeStyles } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: 0,
    },
  },
}));

const NavBar = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <nav className="shift">
          <div className={`base${open ? "" : " close"}`} onClick={handleOpen}>
            <div className={`menu${open ? "" : " close"}`} onClick={handleOpen}>
              <div className="icon">
                <div className="bar"></div>
              </div>
            </div>
            <div className="page-option">
              <Link className="about-page link" aria-hidden="true" to="/">
                <li id="aboutTab"> About </li>
              </Link>

              <Link className="project-page link" aria-hidden="true" to="/projects">
                <li id="projectsTab"> Projects</li>
              </Link>

              <Link className="resume-page link" aria-hidden="true" to="/resume">
                <li id="resumeTab"> Resume </li>
              </Link>
            </div>
            <div className="section">
              <div className="cover1">
                <div className="cover2">
                  <Link className="content" to="/projects"></Link>
                </div>
              </div>
            </div>
            <Link className="section-static top" to="/"></Link>
            <Link className="section-static bottom" to="/resume"></Link>
          </div>

          <div className="navTitle">Mark Bernstein</div>

          {/* <div className="buttons-container" className="navLinks">
            <ul>
              <Link className="link about neonText" to="/">
                <li id="aboutTab"> About </li>
              </Link>
              <Link className="link projects neonText" to="/projects">
                <li id="projectsTab"> Projects</li>
              </Link>
              <Link className="link resume neonText" to="/resume">
                <li id="resumeTab"> Resume </li>
              </Link>
            </ul>
          </div> */}
        </nav>
      </motion.div>
      <NavSpacer />
    </div>
  );
};

export default NavBar;
