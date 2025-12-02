import React from "react";
import "../css/projects.css";
import { motion } from "framer-motion";
import Modal from "@material-ui/core/Modal";
import GithubLogo from "../images/GitHub_32.png";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const ProjectCard = ({
  projectData,
  projectDetails,
  projectLogo,
  propColor,
  allProjects,
  projectIndex,
  setActiveProject,
  modalOnly = false, // if true, always show modal
}) => {
  // --------------------------------------------------
  // PROJECT NAVIGATION
  // --------------------------------------------------
  const goToNextProject = (e) => {
    e.stopPropagation(); // prevent closing modal if click bubbles
    const next = (projectIndex + 1) % allProjects.length;
    setActiveProject(next);
  };

  const goToPrevProject = (e) => {
    e.stopPropagation();
    const prev = (projectIndex - 1 + allProjects.length) % allProjects.length;
    setActiveProject(prev);
  };

  const handleClose = () => setActiveProject(null);

  const paragraphs = projectDetails.paragraphs.map((text, index) => (
    <p className="project-details-paragraph" key={index}>
      {text}
    </p>
  ));

  return (
    <div>
      {!modalOnly && (
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ ease: "easeOut", duration: 0.35 }}
        >
          <div
            className="projectCard"
            style={{ backgroundColor: propColor }}
            onClick={() => setActiveProject(projectIndex)}
          >
            <div className="projectLogo">
              <img src={projectLogo} alt="logo" className="projectImg" />
            </div>
            <div className="projectInfoHeader">{projectData.title}</div>
            <div className="projectInfoText">{projectData.text}</div>
          </div>
        </motion.div>
      )}

      {modalOnly && (
        <Modal
          open={true}
          onClose={handleClose}
          BackdropProps={{ className: "modalBackdrop" }}
        >
          <motion.div
            className="modalContainer"
            initial="hidden"
            animate="visible"
            variants={backdropVariants}
          >
            <motion.div className="modalContent" variants={modalVariants}>
              <div id="closeIcon" onClick={handleClose}>
                ×
              </div>

              {/* LEFT ARROW */}
              <div
                className="modal-arrow modal-arrow-left"
                onClick={goToPrevProject}
              >
                ‹
              </div>

              {/* RIGHT ARROW */}
              <div
                className="modal-arrow modal-arrow-right"
                onClick={goToNextProject}
              >
                ›
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
                    Github <img alt="github logo" src={GithubLogo} />
                  </a>
                ) : (
                  <p className="private-github">Project code is private.</p>
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
      )}
    </div>
  );
};

export default ProjectCard;
