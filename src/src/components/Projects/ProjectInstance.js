import React from "react";
import "./Projects.css";
//TODO: Enlarge image on click

const ProjectInstance = props => {
  return (
    <div className={props.project.id % 2 === 0 ? "project" : "rev-project"}>
      <div className="text-title">
        <a
          className="project-title"
          href={props.project.link}
          style={{ textDecoration: "none", color: "#00cab9" }}
        >
          {props.project.name}
        </a>
        <p>{props.project.description}</p>
      </div>
      <a
        href={props.project.link}
        style={{ textDecoration: "none" }}
      >
        <img
          className="project-pic"
          src={props.project.img}
          alt={props.project.name}
        />
      </a>
    </div>
  );
};

export default ProjectInstance;
