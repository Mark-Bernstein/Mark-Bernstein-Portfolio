import React from "react";
import "../css/nav.css";
import NavSpacer from "./NavSpacer";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <div className="navTitle">Mark Bernstein</div>
      </motion.div>
      <NavSpacer />
    </nav>
  );
};

export default NavBar;
