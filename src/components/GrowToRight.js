import React from "react";
import "../css/nav.css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const infoVariants = {
  hidden: { y: 200, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const GrowToRight = ({
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
      initial={{ scaleX: 0, x: "-100%" }}
      animate={{ scaleX: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1, delay: delay / 2 }}
    >
      <div className="projectRightSpacer projectSpacer">
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

export default GrowToRight;
