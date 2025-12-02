import React from "react";
import "../css/nav.css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const variants = {
  hidden: { x: "50%", scaleX: 0 },
  visible: { x: 0, scaleX: 1 },
};

const infoVariants = {
  hidden: { y: 250, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const GrowToLeft = ({
  projectData,
  projectDetails,
  projectLogo,
  propColor,
  delay,
  allProjects,
  projectIndex,
  setActiveProject,
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ ease: "easeOut", duration: 1, delay: delay / 2 }}
    >
      <div className="projectLeftSpacer projectSpacer">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={infoVariants}
          transition={{ ease: "easeOut", duration: 2, delay: delay / 2 }}
        >
          <ProjectCard
            projectData={projectData}
            projectDetails={projectDetails}
            propColor={propColor}
            projectLogo={projectLogo}
            allProjects={allProjects}
            projectIndex={projectIndex}
            setActiveProject={setActiveProject}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GrowToLeft;
