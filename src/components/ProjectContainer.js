import React from "react";
import "../css/nav.css";
import GrowToRight from "./GrowToRight";
import GrowToLeft from "./GrowToLeft";
import projects from "../data/projects";
import details from "../data/details";
import ReactLogo from "../images/reactlogo.png";
import Next_js_Icon from "../images/Next_js_Icon.jpeg";
import typescript_logo from "../images/typescript_logo.png";
import MySqlLogo from "../images/MySQL_512.png";
// import HTMLLogo from "../images/HTML5_Logo_512.png";
// import JSLogo from "../images/JavaScript_512.png";

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
        projectData={projects["nextJsDashboard"]}
        projectDetails={details["nextJsDashboard"]}
        projectLogo={Next_js_Icon}
      />
      <GrowToRight
        propColor="black"
        delay={0}
        projectData={projects["pokedex"]}
        projectDetails={details["pokedex"]}
        projectLogo={typescript_logo}
      />
      <GrowToLeft
        propColor="black"
        delay={0}
        projectData={projects["druggler"]}
        projectDetails={details["druggler"]}
        projectLogo={ReactLogo}
      />
      <GrowToRight
        propColor="black"
        delay={0.5}
        projectData={projects["musicConnoisseurs"]}
        projectDetails={details["musicConnoisseurs"]}
        projectLogo={MySqlLogo}
      />
    </div>
  );
};

export default ProjectContainer;
