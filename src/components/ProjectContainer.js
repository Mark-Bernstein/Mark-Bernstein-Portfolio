import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/nav.css";
import GrowToRight from "./GrowToRight";
import GrowToLeft from "./GrowToLeft";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import details from "../data/details";
import ReactLogo from "../images/reactlogo.png";
import Next_js_Icon from "../images/Next_js_Icon.jpeg";
import typescript_logo from "../images/typescript_logo.png";
import MatrixBackground from "../components/MatrixBackground";

const title = "Projects";

const letterVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const ProjectContainer = () => {
  const projectList = [
    { key: "typingProdigy", color: "black", logo: Next_js_Icon, delay: 0 },
    { key: "slashRoll", color: "black", logo: ReactLogo, delay: 0.15 },
    { key: "nextJsDashboard", color: "black", logo: Next_js_Icon, delay: 0.3 },
    { key: "pokedex", color: "black", logo: typescript_logo, delay: 0.45 },
    { key: "druggler", color: "black", logo: ReactLogo, delay: 0.6 },
  ];

  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      {/* -------------------------------
          MATRIX RAIN BACKGROUND
      -------------------------------- */}
      <div className="matrix-background">
        <MatrixBackground />
      </div>

      {/* -------------------------------
          PROJECT CARD LIST
      -------------------------------- */}
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

        {projectList.map((proj, index) => {
          const Component = index % 2 === 0 ? GrowToLeft : GrowToRight;

          return (
            <Component
              key={proj.key}
              propColor={proj.color}
              delay={proj.delay}
              projectData={projects[proj.key]}
              projectDetails={details[proj.key]}
              projectLogo={proj.logo}
              allProjects={projectList}
              projectIndex={index}
              setActiveProject={setActiveProject}
            />
          );
        })}

        {activeProject !== null && (
          <ProjectCard
            projectData={projects[projectList[activeProject].key]}
            projectDetails={details[projectList[activeProject].key]}
            projectLogo={projectList[activeProject].logo}
            propColor={projectList[activeProject].color}
            allProjects={projectList}
            projectIndex={activeProject}
            setActiveProject={setActiveProject}
            modalOnly={true}
          />
        )}
      </div>
    </>
  );
};

export default ProjectContainer;
