import React, { useState } from "react";
import "../css/projects.css";
import { motion } from "framer-motion";
import Modal from "@material-ui/core/Modal";
import GithubLogo from "../images/GitHub_32.png";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const getModalStyle = () => ({
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const ProjectCard = ({
  projectData,
  projectDetails,
  projectLogo,
  propColor,
}) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const paragraphs = projectDetails.paragraphs.map((text, index) => (
    <p className="project-details-paragraph" key={index}>
      {text}
    </p>
  ));

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        <div
          className="projectCard"
          style={{ backgroundColor: propColor }}
          onClick={handleOpen}
        >
          <div className="projectLogo">
            <img src={projectLogo} alt="logo" className="projectImg" />
          </div>
          <div className="projectInfoHeader">{projectData.title}</div>
          <div className="projectInfoText">{projectData.text}</div>
        </div>
      </motion.div>

      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{ className: "modalBackdrop" }}
      >
        <motion.div
          className="modalContainer"
          style={modalStyle}
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <motion.div
            className="modalContent"
            initial="hidden"
            animate="visible"
            variants={modalVariants}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
          >
            <div id="closeIcon" onClick={handleClose}>
              ×
            </div>
            <div className="detailsParagraph">
              {projectDetails.websiteLink ? (
                <a
                  className="website-link"
                  href={projectDetails.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go to website
                </a>
              ) : (
                <p className="retired-project-p">Project has been retired.</p>
              )}
              {projectDetails.github ? (
                <a
                  className="github-link"
                  href={projectDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                  <img alt="github logo" src={GithubLogo} />
                </a>
              ) : (
                <p className="private-github">
                  Project code is currently private.
                </p>
              )}
            </div>
            <div className="detailsImage">
              {projectDetails.websiteLink ? (
                <a
                  href={projectDetails.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="websiteScreenshot"
                    src={projectDetails.image}
                    alt="project"
                  />
                </a>
              ) : (
                <img
                  className="websiteScreenshot"
                  src={projectDetails.image}
                  alt="project"
                />
              )}
              {paragraphs}
            </div>
          </motion.div>
        </motion.div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
