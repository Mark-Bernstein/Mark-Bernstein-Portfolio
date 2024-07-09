import React, { useState } from "react";
import "../css/nav.css";
import { motion } from "framer-motion";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import GithubLogo from "../images/GitHub_32.png";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  const width = 80;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    width: `${width}%`,
  };
};

const useStyles = makeStyles(() => ({
  paper: {
    position: "absolute",
    marginTop: "30px",
    height: "75%",
    width: "80%",
    background: "lightblue",
    border: "2px solid #FFF",
    padding: "15px",
    overflowY: "scroll",
  },
}));

const ProjectCard = (props) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  let githubLink = (
    <div className="github-link">
      <a
        href={props.projectDetails["github"]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img alt="github logo" src={GithubLogo}></img>
        Github
      </a>
    </div>
  );

  let websiteLink = (
    <div className="website-link">
      <a
        href={props.projectDetails["websiteLink"]}
        target="_blank"
        rel="noopener noreferrer"
      >
        Live hosted website
      </a>
    </div>
  );

  const retiredWebsite = (
    <p className="retired-project-p">Project has been retired.</p>
  );

  const privateGithub = (
    <p className="private-github">Project code is currently private.</p>
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const paragraphs = [];
  for (const [index, paragraph] of props.projectDetails.paragraphs.entries()) {
    paragraphs.push(
      <p className="project-details-paragraph" key={index}>
        {paragraph}
        <br />
      </p>
    );
  }
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ ease: "easeOut", duration: 0.4 }}
      >
        <div
          className="projectCard"
          style={{ backgroundColor: props.propColor }}
          onClick={handleOpen}
        >
          <div
            className="projectLogo"
            style={{ backgroundColor: props.propColor }}
          >
            <img src={props.projectLogo} alt="logo" className="projectImg" />
          </div>
          <div className="projectInfoHeader">{props.projectData["title"]}</div>
          <div className="projectInfoText">{props.projectData["text"]}</div>
        </div>
      </motion.div>

      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <div style={modalStyle} className={classes.paper}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={modalVariants}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}
            ></motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={modalVariants}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
            >
              <div id="closeIcon" onClick={handleClose}>
                x
              </div>
              <div className="detailsImage">
                {props.projectDetails["websiteLink"] ? (
                  <a
                    className="websiteScreenshot"
                    href={props.projectDetails["websiteLink"]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="websiteScreenshot"
                      src={props.projectDetails.image}
                      alt="project"
                    ></img>
                  </a>
                ) : (
                  <img
                    className="websiteScreenshot"
                    src={props.projectDetails.image}
                    alt="project"
                  ></img>
                )}
                {paragraphs}
              </div>
              <div className="detailsParagraph">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={modalVariants}
                  transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
                >
                  {props.projectDetails["websiteLink"]
                    ? websiteLink
                    : retiredWebsite}
                  {props.projectDetails["github"] ? githubLink : privateGithub}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
