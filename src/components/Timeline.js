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
      <h2>My Coding Journey</h2>
      <ul>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2015</span>Graduated from CSU San Marcos majoring in Arts &
          Technology and minoring in Music Technology
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2019</span>Earned Programming Certificate of Performance at SDMC
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>March 2020</span>Earned Certificate of Completion from the UCSD
          Coding Bootcamp
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>June 2020</span>Started as a Software Engineer at Mindera
          Software Craft
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>Today</span>Reach out to find out!
        </motion.li>
      </ul>
    </div>
  );
};

export default Timeline;
