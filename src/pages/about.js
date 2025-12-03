import React, { useEffect } from "react";
import AboutContainer from "../components/AboutContainer";
import AboutGalaxy from "../components/AboutGalaxy";
import "../css/about.css";

const About = () => {
  useEffect(() => {
    document.body.className = "about-background";
  }, []);

  return (
    <div className="aboutPage">
      <AboutGalaxy />
      <div style={{ position: "relative", zIndex: 1 }}>
        <AboutContainer />
      </div>
    </div>
  );
};

export default About;
