import React from 'react';
import '../css/nav.css';
import { motion } from 'framer-motion';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import GithubLogo from '../images/GitHub_32.png';
import LinkedinLogo from '../images/linkedin_32.png';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}

const modalVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        height: "60%",
        width: "60%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #FFF',
        boxShadow: theme.shadows[4],
        padding: theme.spacing(2, 8, 4),
        overflow: "scroll",
        borderRadius: "15px",
        fontFamily: 'Darker grotesque',
        fontStyle: 'sans-serif'
    }
}));


function ProjectCard(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    let githubLink =
        <div>
            <a
                href={props.projectDetails["github"]}
                target="_blank"
                style={{ float: "left", display: "block" }}
            >
                <img src={GithubLogo}></img>
                Github
            </a>
        </div>


    let herokuLink =
        <div>
            <a
                href={props.projectDetails["heroku"]}
                target="_blank"
                style={{ float: "left", display: "block" }}
            >
                Live hosted website
            </a>
        </div>

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const paragraphs = [];
    for (const [index, paragraph] of props.projectDetails.paragraphs.entries()) {
        paragraphs.push(<p key={index}>{paragraph}<br /></p>)
    }
    return (
        <div>
            <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ ease: "easeOut", duration: 0.4 }}
            >
                <div className="projectCard" style={{ backgroundColor: props.propColor }} onClick={handleOpen}>
                    <div className="projectLogo" style={{ backgroundColor: props.propColor }}>
                        <img src={props.projectLogo} className="projectImg" />
                    </div>
                    <div className="projectInfoHeader">
                        {props.projectData["title"]}
                    </div>
                    <div className="projectInfoText">
                        {props.projectData["text"]}
                    </div>
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
                        >
                            <p id="simple-modal-title" className="detailsTitle">{props.projectData["title"]}</p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={modalVariants}
                            transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
                        >
                            <div className="detailsImage">
                                <a href={props.projectDetails["heroku"]} target="_blank" className="detailsImage">
                                    {props.projectDetails.image}
                                    <img src={props.projectDetails.image}></img>
                                </a>
                            </div>
                        </motion.div>

                        <div className="detailsParagraph" >
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={modalVariants}
                                transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
                            >
                                {paragraphs}
                                {herokuLink} <p>  <i class="arrow left"></i></p>
                                {githubLink} <p>  <i class="arrow left"></i></p>

                            </motion.div>
                        </div>
                        
                    </div>
                </motion.div>
            </Modal>
        </div>
    )
}

export default ProjectCard;