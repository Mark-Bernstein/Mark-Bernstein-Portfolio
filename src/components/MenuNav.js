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
        <div className={`menu-container${isOpen ? " expanded" : ""}`}>
          <div className="menu-btn" onClick={handleOpen}>
            <div className="hamburger">
              <span></span>
            </div>
          </div>

          <div className="menu-items">
            <Link className="menu-item about" to="/">
              About
            </Link>
            <Link className="menu-item projects" to="/projects">
              Projects
            </Link>
            <Link className="menu-item resume" to="/resume">
              Resume
            </Link>
          </div>

          <div className="menu-background top"></div>
          <div className="menu-background bottom"></div>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
