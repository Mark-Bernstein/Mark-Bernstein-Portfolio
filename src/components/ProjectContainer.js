import React from "react";
import "../css/nav.css";
import GrowToRight from "./GrowToRight";
import GrowToLeft from "./GrowToLeft";
import projects from "../data/projects";
import details from "../data/details";
import ReactLogo from "../images/reactlogo.png";
import Next_js_Icon from "../images/Next_js_Icon.jpeg";
import typescript_logo from "../images/typescript_logo.png";

const ProjectContainer = () => {
  return (
    <>
      <div className="cardList">
        <h1 className="projectsTitle">Projects</h1>
        <GrowToLeft
          propColor="black"
          delay={0}
          projectData={projects["typingProdigy"]}
          projectDetails={details["typingProdigy"]}
          projectLogo={Next_js_Icon}
        />
        <GrowToRight
          propColor="black"
          delay={0.15}
          projectData={projects["slashRoll"]}
          projectDetails={details["slashRoll"]}
          projectLogo={ReactLogo}
        />
        <GrowToLeft
          propColor="black"
          delay={0.3}
          projectData={projects["nextJsDashboard"]}
          projectDetails={details["nextJsDashboard"]}
          projectLogo={Next_js_Icon}
        />
        <GrowToRight
          propColor="black"
          delay={0.45}
          projectData={projects["pokedex"]}
          projectDetails={details["pokedex"]}
          projectLogo={typescript_logo}
        />
        <GrowToLeft
          propColor="black"
          delay={0.6}
          projectData={projects["druggler"]}
          projectDetails={details["druggler"]}
          projectLogo={ReactLogo}
        />
      </div>
    </>
  );
};

export default ProjectContainer;
