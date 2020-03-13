import React from 'react';
import '../css/resume.css';
import { motion } from 'framer-motion';
import Button from '@material-ui/core/Button';
import GithubLogo from '../images/GitHub_32.png';
import LinkedinLogo from '../images/linkedin_32.png';

const variantsY = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

function ResumeContainer() {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsY}
            transition={{ ease: "easeOut", duration: 1.5 }}
        >
            <div className="resumeContainer">
                <div className="resumeTitle">Resume / CV</div>
                <div>
                    <Button >
                        <a href="https://github.com/Mark-Bernstein" style={{ float: 'left' }} target="_blank" >
                            <img src={GithubLogo}></img>
                            GitHub
                        </a>
                    </Button>
                    <Button>
                        <a href="https://www.linkedin.com/in/mark-bernstein-b287948a/" target="_blank" >
                            <img src={LinkedinLogo}></img>
                            LinkedIn
                        </a>
                    </Button>

                    <p id="eMail">
                        eMail: ProgrammingByMark@gmail.com
                    </p>
                    
                </div>

                


                <hr></hr>

                <div className="resumeSectionHeader">Education</div>
                <div className="sectionContainer">
                    <div className="resumeSubHeader">UCSD Full Stack Bootcamp&nbsp;</div>
                    <div className="resumeSectionInfo"> | Certificate of Completion |  March 2020</div>
                    <div className="resumeSubHeader">San Diego Mesa College&nbsp;</div>
                    <div className="resumeSectionInfo"> | Programming Certificate of Performance | GPA: 3.8</div>
                    <div className="resumeSubHeader">Cal State University San Marcos&nbsp;</div>
                    <div className="resumeSectionInfo"> | Bachelor of Arts: Arts and Technology | GPA: 3.8</div>
                </div>

                <hr></hr>

                <div className="resumeSectionHeader">Skills</div>
                <div className="sectionContainer">
                    <div className="resumeSubHeader">Technical Skills&nbsp;</div>
                    <div className="resumeSectionInfo">&nbsp;</div>
                    <ul className="resumeText">
                        <p>JavaScript | React | HTML | CSS | Java | C++/C# | Lisp | Visual Basic | Node | Express | Bootstrap | Sonic Pi | Github | Git Bash | Heroku | Node | Express | Handlebars | jQuery | JSON | AJAX | Photoshop | FL Studio | Final Cut Pro </p>
                    </ul>
                    <div className="resumeSubHeader">Soft Skills&nbsp;</div>
                    <div className="resumeSectionInfo">&nbsp;</div>
                    <ul className="resumeText">
                        <p>Communicator | Detail-oriented | Collaborator | Team player | Problem Solver | Flexible | Dependable</p>
                    </ul>
                </div>

                <hr></hr>

                <div className="resumeSectionHeader">
                    Professional Summary
                </div>
                <div className="sectionContainer">
                    <p className="resumeText">
                        Full Stack Web Developer with a passion for creativity and excited to contribute to the programming world. Patient in tackling problems in an exceptionally detail-oriented and methodical nature. Performs well under pressure of organizing and upholding project deadlines by being flexible and dependable. Earned the Programming Certificate of Performance from Mesa College and the Full Stack Coding Bootcamp Certificate from UCSD.
                    </p>
                </div>

                <br></br>
                <br></br>
            </div>
        </motion.div>
    )
}

export default ResumeContainer;