import React from "react";
import "../../Global.css";
import "./Skills.css";
import SkillContainer from "./SkillContainer";

function Skills({
  programming_languages = ["JavaScript", "Python", "Java", "C++"],
  databases = ["MySQL", "MongoDB", "Firebase", "PostgreSQL"],
  web_technologies = ["HTML", "CSS", "React", "Node.js"],
  frameworks = ["Bootstrap", "Material-UI", "jQuery"],
  tools = ["Git", "VS Code", "Postman"],
  cloud = ["AWS", "Google Cloud", "Netlify"]
}) {
  return (
    <div className="skills">
      <h1 className='heading'>{`<Skills />`}</h1>
      <div className="skills-description">
      <SkillContainer
        title="Programming Languages"
        skills={programming_languages}
      />
        <SkillContainer title="Databases" skills={databases} />
        <SkillContainer title="Web Technologies" skills={web_technologies} />
        <SkillContainer title="Frameworks" skills={frameworks} />
        <SkillContainer title="Tools" skills={tools} />
        <SkillContainer title="Cloud" skills={cloud} />
    </div>
    </div>
  );
}

export default Skills;
