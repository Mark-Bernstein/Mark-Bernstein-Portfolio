import React from "react";
import "../css/resume.css";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";
import GithubLogo from "../images/GitHub_32.png";
import LinkedinLogo from "../images/linkedin_32.png";
import EmailLogo from "../images/emailLogo.png";

const variantsY = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const ResumeContainer = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variantsY}
      transition={{ ease: "easeOut", duration: 1.5 }}
    >
      <div className="resumeContainer">
        <div style={{ marginBottom: "10px" }}> </div>
        <div>
          <Button>
            <a
              className="resume-links"
              href="https://www.linkedin.com/in/mark-bernstein-b287948a/"
              style={{ float: "left", margin: "0", display: "inline-block" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="linkedin logo" src={LinkedinLogo}></img>
              LinkedIn
            </a>
          </Button>
          <Button>
            <a
              className="resume-links"
              href="https://github.com/Mark-Bernstein"
              style={{ float: "left", margin: "0", display: "inline-block" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="github logo" src={GithubLogo}></img>
              GitHub
            </a>
          </Button>

          <p id="eMail">
            <img
              src={EmailLogo}
              alt="gmail logo"
              style={{ float: "left", margin: "0", display: "inline-block" }}
            ></img>
            ProgrammingByMark@gmail.com
          </p>
        </div>

        <hr></hr>

        <div className="resumeSectionHeader">Work Experience</div>
        <div className="sectionContainer">
          <div className="resumeSubHeader">
            Mindera Software Craft | 2020 - present&nbsp;
          </div>
          <div className="resumeSectionInfo">Software Development Engineer</div>
        </div>

        <hr></hr>

        <div className="resumeSectionHeader">Education</div>
        <div className="sectionContainer">
          <div className="resumeSubHeader">
            UCSD Full Stack Coding Bootcamp&nbsp;
          </div>
          <div className="resumeSectionInfo"> Certificate of Completion</div>
          <br />
          <div className="resumeSubHeader">San Diego Mesa College&nbsp;</div>
          <div className="resumeSectionInfo">
            {" "}
            Programming Certificate of Performance
          </div>
          <br />
          <div className="resumeSubHeader">
            Cal State University San Marcos&nbsp;
          </div>
          <div className="resumeSectionInfo">
            {" "}
            Bachelor of Arts: Arts and Technology
          </div>
        </div>

        <hr></hr>

        <div className="resumeSectionHeader">Skills</div>
        <div className="sectionContainer">
          <div className="resumeSubHeader">Technical Skills&nbsp;</div>
          <div className="resumeSectionInfo">&nbsp;</div>

          <p className="resumeText">
            JavaScript | React | React Native | TypeScript | HTML | CSS | Jest |
            Enzyme | Node | Java | C++/C# | Lisp | Visual Basic | Express |
            Sonic Pi | Handlebars | jQuery | JSON | AJAX | Github | Git Bash |
            BitBucket | Heroku | Photoshop | FL Studio | Final Cut Pro{" "}
          </p>

          <div className="resumeSubHeader">Soft Skills&nbsp;</div>
          <div className="resumeSectionInfo">&nbsp;</div>

          <p className="resumeText">
            Communicator | Detail-oriented | Patient | Team player | Problem
            Solver | Flexible | Dependable | Creative
          </p>
        </div>

        <hr></hr>

        <div className="resumeSectionHeader">
          Full Stack Web Developer Bringing Impactful Transformations
        </div>
        <div className="sectionContainer">
          <p className="resumeText">
            Full Stack Web Developer with a strong passion for creativity and
            innovation. Committed to contributing to the programming community
            with meticulous attention to detail and a methodical approach to
            problem-solving. Demonstrates exceptional performance under
            pressure, consistently meeting project deadlines with flexibility
            and reliability. Dedicated to delivering high-quality results and
            continuously advancing skills in a dynamic and evolving field.
          </p>
        </div>

        <br></br>
        <br></br>
      </div>
    </motion.div>
  );
};

export default ResumeContainer;
