import React, { useEffect } from "react";
import AboutContainer from "../components/AboutContainer";
import "../css/about.css";

const About = () => {
  useEffect(() => {
    document.body.className = "about-background";
  }, []);

  return (
    <div className="aboutPage">
      <AboutContainer />
    </div>
  );
};

export default About;
