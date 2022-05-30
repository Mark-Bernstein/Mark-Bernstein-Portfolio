import React from "react";
import "../css/nav.css";
import GrowToRight from "../components/growtoright";
import GrowToLeft from "../components/growtoleft";
import projects from "../data/projects";
import details from "../data/details";
import ReactLogo from "../images/reactlogo.png";
import HTMLLogo from "../images/HTML5_Logo_512.png";
import MySqlLogo from "../images/MySQL_512.png";
import JSLogo from "../images/JavaScript_512.png";

const ProjectContainer = () => {
  return (
    <div className="cardList">
      <GrowToRight
        propColor="black"
        delay={0}
        projectData={projects["slashRoll"]}
        projectDetails={details["slashRoll"]}
        projectLogo={ReactLogo}
      />
      <GrowToLeft
        propColor="black"
        delay={0}
        projectData={projects["drugBud"]}
        projectDetails={details["drugBud"]}
        projectLogo={ReactLogo}
      />
      <GrowToRight
        propColor="black"
        delay={0.5}
        projectData={projects["musicConnoisseurs"]}
        projectDetails={details["musicConnoisseurs"]}
        projectLogo={ReactLogo}
      />
      <GrowToLeft
        propColor="black"
        delay={1}
        projectData={projects["burger"]}
        projectDetails={details["burger"]}
        projectLogo={MySqlLogo}
      />
      <GrowToRight
        propColor="black"
        delay={1.5}
        projectData={projects["noteTaker"]}
        projectDetails={details["noteTaker"]}
        projectLogo={JSLogo}
      />
      <GrowToLeft
        propColor="black"
        delay={2}
        projectData={projects["cityScout"]}
        projectDetails={details["cityScout"]}
        projectLogo={HTMLLogo}
      />
    </div>
  );
};

export default ProjectContainer;
