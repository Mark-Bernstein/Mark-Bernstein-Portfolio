import React from "react";
import "../css/socialMediaLinks.css";
import GithubLogo from "../images/GitHub_32.png";
import LinkedinLogo from "../images/linkedin_32.png";
import Button from "@material-ui/core/Button";

const SocialMediaLinks = () => {
  return (
    <div className="socialMediaLinks">
      <h2>Connect with Me</h2>
      <Button>
        <a
          className="resume-links"
          href="https://www.linkedin.com/in/mark-bernstein-b287948a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="linkedin logo"
            src={LinkedinLogo}
            style={{ marginRight: "8px" }}
          ></img>
          LinkedIn
        </a>
      </Button>
      <Button>
        <a
          className="resume-links"
          href="https://github.com/Mark-Bernstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            alt="github logo"
            src={GithubLogo}
            style={{ marginRight: "8px" }}
          ></img>
          GitHub
        </a>
      </Button>
    </div>
  );
};

export default SocialMediaLinks;
