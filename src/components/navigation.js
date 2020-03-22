import React from 'react';
import Button from '@material-ui/core/Button';
import '../css/nav.css';
import NavSpacer from './navspacer';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: 0
        },
    },
}));

function NavBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ease: "easeOut", duration: 1.5 }}
            >
                {/* <nav className="shift">
                    <div className="navTitle">Mark Bernstein</div>

                    <div className="navLinks">
                        <Link className="link" to="/"> About </Link>
                    </div>
                    <div className="navLinks">
                        <Link className="link" to="/projects"> Projects </Link>
                    </div>
                    <div className="navLinks">
                        <Link className="link" to="/resume"> Resume </Link>
                    </div>
                </nav> */}

                <nav className="shift">
                    <div className="navTitle">Mark Bernstein</div>

                    <div class="buttons-container" className="navLinks">
                        <ul>
                            <li id="aboutTab"> <Link className="link" to="/"> About </Link></li>
                            <li id="projectsTab"> <Link className="link" to="/projects"> Projects </Link></li>
                            <li id="resumeTab"> <Link className="link" to="/resume"> Resume </Link></li>
                        </ul>
                    </div>
                </nav>

                {/* <div className="appBar">
                    <div className="navTitle">Mark Bernstein</div>
                    
                    <div className="navLinks">
                        <Link className="link" to="/resume"> Resume </Link>
                    </div>
                    <div className="navLinks">
                        <Link className="link" to="/projects"> Projects </Link>
                    </div>
                    <div className="navLinks">
                        <Link className="link" to="/"> About </Link>
                    </div>
                </div> */}
            </motion.div>
            <NavSpacer />


        </div>
    )
}

export default NavBar;