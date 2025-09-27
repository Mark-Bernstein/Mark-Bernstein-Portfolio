import React, { useState } from "react";
import "../css/about.css";

const AboutMeText = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="aboutText">
      <button
        className="resume-links"
        id="aboutMeButton"
        onClick={handleToggle}
      >
        {isExpanded ? (
          "Show Less"
        ) : (
          <>
            About Me
            <br />
          </>
        )}
      </button>
      <div className={`expandedContent ${isExpanded ? "show" : ""}`}>
        <p>
          Mark holds a Bachelor's Degree in Visual and Performing Arts from
          California State University, San Marcos. Driven by a passion for
          technology and creativity, he decided to further his education in a
          field that he found more intellectually stimulating. After reflecting
          on his future, Mark recognized his strong affinity for learning about
          and utilizing new technology. He pondered,{" "}
          <em>
            "How can I combine my experience with software and creativity gained
            from majoring in Arts and Technology?"
          </em>{" "}
          The answer was clear: software engineering.
        </p>
        <p>
          Mark then pursued computer science at San Diego Mesa College for two
          years, where he earned a Programming Certificate of Performance with a
          GPA of 3.89. Determined to achieve his career goals, he joined the
          UCSD Coding Bootcamp, successfully completing the program and
          receiving a Certificate of Completion. Equipped with these new skills,
          Mark was eager to apply his knowledge in the real world and continue
          his learning in the ever-evolving field of software engineering.
        </p>
        <p>
          He began his professional journey as a Software Engineer at Mindera
          Software Craft, where he had the opportunity to work with prominent
          clients such as FanDuel and TVG. During this time, Mark had the
          wonderful experience of proposing in Portugal during a work trip, a
          significant moment that beautifully intertwined his work and personal
          life.
        </p>
        <p>
          In his free time, Mark enjoys playing guitar, creating electronic
          music, going to the beach, playing volleyball, pickleball, and
          spending time with friends and family. A San Diego native, he loves
          traveling to new destinations and always seeks out knowledge and new
          adventures, no matter where he goes.
        </p>
        <p>
          Looking ahead, Mark is excited to continue pushing the boundaries of
          what's possible with technology. He is dedicated to lifelong learning
          and aims to contribute innovative solutions to the tech industry,
          always striving to blend creativity with cutting-edge software
          engineering.
        </p>
        <span id="beer" role="img" aria-label="cheers">
          🍻
        </span>
      </div>
    </div>
  );
};

export default AboutMeText;
