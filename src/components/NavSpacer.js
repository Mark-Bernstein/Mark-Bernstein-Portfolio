import React from "react";
import "../css/nav.css";
import { motion } from "framer-motion";

const NavSpacer = () => {
  return (
    <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ ease: "easeOut", duration: 0.5 }}>
      <div className="spacer"></div>
    </motion.div>
  );
};

export default NavSpacer;
