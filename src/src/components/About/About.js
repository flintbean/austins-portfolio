import React from "react";
import Skill from "./Skill";
import "./About.css";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-ctn">
        <h3 className="about-header">Summary</h3>
        <p className="about-text">
          I am a <strong>Full-Stack Web Developer</strong> specializing in all things Java
        </p>
        <h3 className="about-header">Skills</h3>
        <div className="skills-ctn">
          {skillsArr.map((item, index) => {
            return <Skill key={index} skill={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default About;

let skillsArr = [
  "C Programming",
  "CSS",
  "Django",
  "Express JS",
  "HTML",
  "JavaScript",
  "Java",
  "LESS",
  "MongoDB",
  "Node JS",
  "Python",
  "React",
  "SQL",
  "C++",
  "Express"
];
