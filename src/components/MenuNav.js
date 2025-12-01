import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../css/nav.css";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NavBar = () => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);

  const toggleMenuExpandedState = () => {
    setMenuIsExpanded((previousState) => !previousState);
  };

  return (
    <nav className="navbar">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <div className={`menu-container${menuIsExpanded ? " expanded" : ""}`}>
          {/* Primary Menu Button */}
          <div className="menu-btn" onClick={toggleMenuExpandedState}>
            <div className="hamburger">
              <span></span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="menu-items">
            <Link
              className="menu-item about"
              to="/about"
              onClick={toggleMenuExpandedState}
            >
              About
            </Link>

            <Link
              className="menu-item projects"
              to="/"
              onClick={toggleMenuExpandedState}
            >
              Projects
            </Link>

            <Link
              className="menu-item resume"
              to="/resume"
              onClick={toggleMenuExpandedState}
            >
              Resume
            </Link>
          </div>

          {/* Background Expanding Shapes */}
          <div className="menu-background top"></div>
          <div className="menu-background bottom"></div>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavBar;
