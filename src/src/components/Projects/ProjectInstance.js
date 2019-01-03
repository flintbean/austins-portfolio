import React from "react";
//TODO: Enlarge image on click

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
        style={{ width: "500px", height: "400px" }}
        src={props.project.img}
        alt={props.project.name}
      />
    </div>
  );
};

export default ProjectInstance;
