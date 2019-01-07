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
        <h3 className="about-header">About Me</h3>
        <p className="about-text">
          This is where I am going to put a picture of myself and do a little
          explaining on what I like to do and my areas of expertise. The
          languages that I am good with and maybe the schools I went to?
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
  "LESS",
  "MongoDB",
  "Node JS",
  "Python",
  "React",
  "SQL",
  "C++",
  "Express"
];
