import React from "react";
import { skills } from "../../data/skills";
import Skill from "../Skill/Skill";
import "./skills.css";

const Skills = () => {
  return (
    <section>
      <div className="container">
        <h5 className="section-header">Skills</h5>
      </div>
      <div className="container skills__container">
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
