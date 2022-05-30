import React from "react";
import "../css/nav.css";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const infoVariants = {
  hidden: { y: 169, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const GrowToRight = (props) => {
  return (
    <motion.div
      initial={{ scaleX: 0, x: "-100%" }}
      animate={{ scaleX: 1, x: 0 }}
      transition={{ ease: "easeOut", duration: 1, delay: props.delay / 2 }}
    >
      <div className="projectRightSpacer projectSpacer" style={{ backgroundColor: props.propColor }}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={infoVariants}
          transition={{ ease: "easeOut", duration: 2, delay: props.delay / 2 }}
        >
          <ProjectCard
            projectData={props.projectData}
            projectDetails={props.projectDetails}
            propColor={props.propColor}
            projectLogo={props.projectLogo}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GrowToRight;
