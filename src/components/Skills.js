import React from "react";
import "../css/skills.css";

const skills = [
  // Programming Languages
  "Java",
  "C++/C#",
  "Lisp",
  "Visual Basic",

  // Web Technologies
  "AJAX",
  "JSON",
  "Express",
  "Handlebars",
  "jQuery",
  "Redux",

  // Frontend Frameworks & Libraries
  "React",

  // Styling & Design
  "Sass",
  "LESS",
  "Responsive Design",
  "Mobile-First Design",
  "Design Systems",
  "Figma",
  "Photoshop",

  // Development Tools & Platforms
  "Dev Tools",
  "Postman",
  "Heroku",
  "Vercel",

  // Multimedia & Other Tools
  "Final Cut Pro",
  "FL Studio",
  "Sonic Pi",

  // Administration & Accessibility
  "Admin console",
  "Accessibility",
];

const coreSkills = [
  "JavaScript (TypeScript)",
  "React Testing Library, Jest, Enzyme",
  "HTML, CSS, React, Preact, Node.js, Express",
  "GitHub, BitBucket, Git Bash",
  "MySQL, MongoDB",
  "GoCD, Cockpit, Jira, Qubit",
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>Core Technical Skills</h2>
      <ul className="core-skills">
        {coreSkills.map((skill, index) => {
          return (
            <>
              <li key={index} style={{ animationDelay: `${0.2 * index}s` }}>
                <span>{skill}</span>
              </li>
            </>
          );
        })}
      </ul>
      <h2>Additional Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{ animationDelay: `${0.2 * index}s` }}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
