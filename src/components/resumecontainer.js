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

function ResumeContainer() {
  return (
    <motion.div initial="hidden" animate="visible" variants={variantsY} transition={{ ease: "easeOut", duration: 1.5 }}>
      <div className="resumeContainer">
        <div style={{ marginBottom: "10px" }}> </div>
        <div>
          <Button>
            <a
              className="resume-links"
              href="https://github.com/Mark-Bernstein"
              style={{ float: "left", margin: "0", display: "inline-block" }}
              target="_blank"
            >
              <img alt="github logo" src={GithubLogo}></img>
              GitHub
            </a>
          </Button>
          <Button>
            <a
              className="resume-links"
              href="https://www.linkedin.com/in/mark-bernstein-b287948a/"
              style={{ float: "left", margin: "0", display: "inline-block" }}
              target="_blank"
            >
              <img alt="linkedin logo" src={LinkedinLogo}></img>
              LinkedIn
            </a>
          </Button>

          <p id="eMail">
            <img src={EmailLogo} alt="gmail logo" style={{ float: "left", margin: "0", display: "inline-block" }}></img>
            ProgrammingByMark@gmail.com
          </p>
        </div>

        <hr></hr>

        <div className="resumeSectionHeader">Education</div>
        <div className="sectionContainer">
          <div className="resumeSubHeader">UCSD Full Stack Coding Bootcamp&nbsp;</div>
          <div className="resumeSectionInfo"> Certificate of Completion</div>
          <div className="gpa">March 2020</div>
          <div className="resumeSubHeader">San Diego Mesa College&nbsp;</div>
          <div className="resumeSectionInfo"> Programming Certificate of Performance</div>
          <div className="gpa">GPA: 3.89</div>
          <div className="resumeSubHeader">Cal State University San Marcos&nbsp;</div>
          <div className="resumeSectionInfo"> Bachelor of Arts: Arts and Technology</div>
          <div className="gpa">GPA: 3.80</div>
        </div>

        <hr></hr>

        <div className="resumeSectionHeader">Skills</div>
        <div className="sectionContainer">
          <div className="resumeSubHeader">Technical Skills&nbsp;</div>
          <div className="resumeSectionInfo">&nbsp;</div>

          <p className="resumeText">
            JavaScript | React | HTML | CSS | Java | C++/C# | Lisp | Visual Basic | Node | Express | Bootstrap | Sonic
            Pi | Github | Git Bash | Heroku | Handlebars | jQuery | JSON | AJAX | Photoshop | FL Studio | Final Cut Pro{" "}
          </p>

          <div className="resumeSubHeader">Soft Skills&nbsp;</div>
          <div className="resumeSectionInfo">&nbsp;</div>

          <p className="resumeText">
            Communicator | Detail-oriented | Patient | Team player | Problem Solver | Flexible | Dependable | Creative
          </p>
        </div>

        <hr></hr>

        <div className="resumeSectionHeader">Full Stack Web Developer Ready to Bring Impactful Transformation</div>
        <div className="sectionContainer">
          <p className="resumeText">
            Full Stack Web Developer with a passion for creativity and excited to contribute to the programming world.
            Patient in tackling problems in an exceptionally detail-oriented and methodical nature. Performs well under
            pressure in all circumstances. Organizes and upholds project deadlines by being flexible and dependable.
            Earned the Programming Certificate of Performance from Mesa College and the Full Stack Coding Bootcamp
            Certificate from UCSD.
          </p>
        </div>

        <br></br>
        <br></br>
      </div>
    </motion.div>
  );
}

export default ResumeContainer;
