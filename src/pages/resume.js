import React, { useEffect } from "react";
import ResumeContainer from "../components/ResumeContainer";
import "../css/resume.css";

const Resume = () => {
  useEffect(() => {
    document.body.className = "resume-background";
  }, []);

  return (
    <div className="resumePage">
      <ResumeContainer />
    </div>
  );
};

export default Resume;
