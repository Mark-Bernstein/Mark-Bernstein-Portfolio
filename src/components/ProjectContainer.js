import React from "react";
import { motion } from "framer-motion";
import "../css/nav.css";
import GrowToRight from "./GrowToRight";
import GrowToLeft from "./GrowToLeft";
import projects from "../data/projects";
import details from "../data/details";
import ReactLogo from "../images/reactlogo.png";
import Next_js_Icon from "../images/Next_js_Icon.jpeg";
import typescript_logo from "../images/typescript_logo.png";

const title = "Projects";

// Framer Motion variants for individual letters
const letterVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

// Container variant to stagger children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // delay between letters
    },
  },
};

const ProjectContainer = () => {
  return (
    <>
      <div className="cardList">
        <motion.h1
          className="projectsTitle"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <GrowToLeft
          propColor="black"
          delay={0}
          projectData={projects["typingProdigy"]}
          projectDetails={details["typingProdigy"]}
          projectLogo={Next_js_Icon}
        />
        <GrowToRight
          propColor="black"
          delay={0.15}
          projectData={projects["slashRoll"]}
          projectDetails={details["slashRoll"]}
          projectLogo={ReactLogo}
        />
        <GrowToLeft
          propColor="black"
          delay={0.3}
          projectData={projects["nextJsDashboard"]}
          projectDetails={details["nextJsDashboard"]}
          projectLogo={Next_js_Icon}
        />
        <GrowToRight
          propColor="black"
          delay={0.45}
          projectData={projects["pokedex"]}
          projectDetails={details["pokedex"]}
          projectLogo={typescript_logo}
        />
        <GrowToLeft
          propColor="black"
          delay={0.6}
          projectData={projects["druggler"]}
          projectDetails={details["druggler"]}
          projectLogo={ReactLogo}
        />
      </div>
    </>
  );
};

export default ProjectContainer;
