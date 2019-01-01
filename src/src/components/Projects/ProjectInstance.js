import React from "react";

const ProjectInstance = props => {
  return (
    <div>
      <a
        href={props.project.link}
        style={{ textDecoration: "none", color: "#FF0000" }}
      >
        {props.project.name}
      </a>
      <p>{props.project.description}</p>
      <img
        style={{ width: "300px", height: "200px" }}
        src={props.project.img}
        alt={props.project.name}
      />
    </div>
  );
};

export default ProjectInstance;
