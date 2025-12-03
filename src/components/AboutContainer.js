import React, { useRef } from "react";
import "../css/nav.css";
import { motion } from "framer-motion";
import MarkProfilePicture from "../images/Mark_Profile_Picture.jpg";
import AboutMeText from "./AboutMeText";
import Skills from "./Skills";
import SocialMediaLinks from "./SocialMediaLinks";
import Timeline from "./Timeline";
import useIntersectionObserver from "../utils/useIntersectionObserver";

const variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const variantsY = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const AboutContainer = () => {
  const skillsRef = useRef();
  const timelineRef = useRef();
  const socialLinksRef = useRef();

  const skillsVisible = useIntersectionObserver(skillsRef, { threshold: 0.1 });
  const timelineVisible = useIntersectionObserver(timelineRef, {
    threshold: 0.1,
  });
  const socialLinksVisible = useIntersectionObserver(socialLinksRef, {
    threshold: 0.1,
  });

  return (
    <div className="aboutContainer">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <img className="aboutImage" alt="" src={MarkProfilePicture}></img>
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variantsY}
        transition={{ ease: "easeOut", duration: 1.5 }}
      >
        <AboutMeText />
      </motion.div>
      <motion.div
        ref={skillsRef}
        initial="hidden"
        animate={skillsVisible ? "visible" : "hidden"}
        variants={variantsY}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Skills />
      </motion.div>
      <motion.div
        ref={timelineRef}
        initial="hidden"
        animate={timelineVisible ? "visible" : "hidden"}
        variants={variantsY}
        transition={{ ease: "easeOut", duration: 2.5 }}
      >
        <Timeline />
      </motion.div>
      <motion.div
        ref={socialLinksRef}
        initial="hidden"
        animate={socialLinksVisible ? "visible" : "hidden"}
        variants={variantsY}
        transition={{ ease: "easeOut", duration: 3 }}
      >
        <SocialMediaLinks />
      </motion.div>
    </div>
  );
};

export default AboutContainer;
