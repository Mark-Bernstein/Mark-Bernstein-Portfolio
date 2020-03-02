import React from 'react';
import '../css/nav.css';
import GrowToRight from '../components/growtoright';
import GrowToLeft from '../components/growtoleft';
import projects from '../data/projects';
import details from '../data/details';
import ReactLogo from '../images/reactlogo.png';
import HTMLLogo from '../images/HTML5_Logo_512.png';
import MySqlLogo from '../images/MySQL_512.png';
import JSLogo from '../images/JavaScript_512.png';

function ProjectContainer() {
    return (
        <div className="cardList">
            <GrowToRight
                propColor="#FFBA49"
                delay={0}
                projectData={projects["musicConnoisseurs"]}
                projectDetails={details["musicConnoisseurs"]}
                projectLogo={ReactLogo}
            />
            <GrowToLeft
                propColor="#20A39E"
                delay={1}
                projectData={projects["burger"]}
                projectDetails={details["burger"]}
                projectLogo={MySqlLogo}
            />
            <GrowToRight
                propColor="#EF5B5B"
                delay={2}
                projectData={projects["noteTaker"]}
                projectDetails={details["noteTaker"]}
                projectLogo={HTMLLogo}
            />
            <GrowToLeft
                propColor="#713E5A"
                delay={3}
                projectData={projects["cityScout"]}
                projectDetails={details["cityScout"]}
                projectLogo={JSLogo}
            />
            <GrowToRight
                propColor="#63A375"
                delay={4}
                projectData={projects["weatherDashboard"]}
                projectDetails={details["weatherDashboard"]}
                projectLogo={HTMLLogo}
            />
        </div>
    )
}

export default ProjectContainer;