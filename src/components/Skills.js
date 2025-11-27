import React from "react";
import "../css/skills.css";

const coreSkills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Testing Library",
  "Jest",
  "Enzyme",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "GitHub",
  "BitBucket",
  "Git Bash",
  "MySQL",
  "MongoDB",
  "Postgres",
  "GoCD",
  "ArgoCD",
  "Cockpit",
  "Jira",
  "Qubit",
];

const additionalSkills = [
  "Java",
  "C++/C#",
  "Lisp",
  "Visual Basic",
  "Preact",
  "AJAX",
  "JSON",
  "Handlebars",
  "jQuery",
  "Redux",
  "Sass",
  "LESS",
  "Responsive Design",
  "Mobile-First Design",
  "Design Systems",
  "Figma",
  "Photoshop",
  "Dev Tools",
  "Postman",
  "Heroku",
  "Vercel",
  "Final Cut Pro",
  "FL Studio",
  "Sonic Pi",
  "Admin console",
  "Accessibility",
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Core Technical Skills</h2>
      <ul className="core-skills">
        {coreSkills.map((skill, index) => (
          <li key={index} style={{ animationDelay: `${0.2 * index}s` }}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>

      <h2>Additional Skills</h2>
      <ul className="additional-skills">
        {additionalSkills.map((skill, index) => (
          <li key={index} style={{ animationDelay: `${0.2 * index}s` }}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
