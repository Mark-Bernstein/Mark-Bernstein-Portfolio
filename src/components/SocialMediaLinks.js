import React from "react";
import "../css/socialMediaLinks.css";

const SocialMediaLinks = () => {
  return (
    <div className="socialMediaLinks">
      <h2>Connect with Me</h2>
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        href="https://github.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://twitter.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </div>
  );
};

export default SocialMediaLinks;
