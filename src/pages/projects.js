import React, { useEffect } from "react";
import "../css/projects.css";
import ProjectContainer from "../components/ProjectContainer";

const Projects = () => {
  useEffect(() => {
    document.body.className = "home-background";
  }, []);

  return (
    <div className="projectPage">
      <ProjectContainer />
    </div>
  );
};

export default Projects;
