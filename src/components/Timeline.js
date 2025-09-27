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
          <span>2019</span>Programming Certificate of Performance at SDMC
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2020</span>Certificate of Completion from the UCSD Coding
          Bootcamp
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>2020</span>
          <div>
            Software Development Engineer at{" "}
            <a
              target="_blank"
              href="https://mindera.com/"
              style={{ color: "yellow" }}
              rel="noreferrer"
            >
              Mindera Software Craft
            </a>
          </div>
        </motion.li>
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={variants}
        >
          <span>Today</span>
          <div>More to come soon!</div>
        </motion.li>
      </ul>
    </div>
  );
};

export default Timeline;
