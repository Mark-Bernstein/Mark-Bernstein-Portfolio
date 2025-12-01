import React from "react";
import "../css/skills.css";

const coreSkills = [
  "JavaScript (ES6)",
  "HTML5",
  "CSS3",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Redux",
  "Context API",
  "REST APIs",
  "A/B Testing (Qubit)",
  "Unit Testing",
  "GitHub",
  "CI/CD",
];

const additionalSkills = [
  "Figma with Dev Mode",
  "Storyblok CMS",
  "CAPI / Admin Console",
  "SEO Collaboration",
  "Engagement Tracking",
  "Feature Flagging",
  "Agile / Scrum",
  "Cross-Functional Collaboration",
  "Design System Implementation",
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
      <ul>
        {additionalSkills.map((skill, index) => (
          <li key={index} style={{ animationDelay: `${0.5 * index}s` }}>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
