import React from "react";
import { motion } from "framer-motion";
import "../css/timeline.css";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Timeline = () => {
  return (
    <div className="timeline">
      <h2>My Journey</h2>
      <ul>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2024</span> - Joined Discord as a Software Engineer
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2023</span> - Completed UCSD Coding Bootcamp
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2021</span> - Started as a Software Engineer at Mindera Software
          Craft
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2019</span> - Earned Programming Certificate of Performance
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2018</span> - Graduated from California State University, San
          Marcos
        </motion.li>
      </ul>
    </div>
  );
};

export default Timeline;
