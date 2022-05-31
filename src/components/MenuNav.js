import React, { useState } from "react";
import "../css/nav.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);

  return (
    <nav className="navbar">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <div className={`base${isOpen ? " close" : ""}`} onClick={handleOpen}>
          <div className="menu">
            <div className="middle-line-menu">
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
      </motion.div>
    </nav>
  );
};

export default NavBar;
