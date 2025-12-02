import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "../css/nav.css";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NavBar = () => {
  const [menuIsExpanded, setMenuIsExpanded] = useState(false);
  const location = useLocation(); // get current path

  const toggleMenuExpandedState = () => {
    setMenuIsExpanded((prev) => !prev);
  };

  // helper function to disable click if already on that page
  const handleLinkClick = (path) => {
    if (location.pathname !== path) {
      toggleMenuExpandedState();
    }
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
              className={`menu-item about${
                location.pathname === "/about" ? " disabled" : ""
              }`}
              to="/about"
              onClick={() => handleLinkClick("/about")}
            >
              About
            </Link>

            <Link
              className={`menu-item projects${
                location.pathname === "/" ? " disabled" : ""
              }`}
              to="/"
              onClick={() => handleLinkClick("/")}
            >
              Projects
            </Link>

            <Link
              className={`menu-item resume${
                location.pathname === "/resume" ? " disabled" : ""
              }`}
              to="/resume"
              onClick={() => handleLinkClick("/resume")}
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
