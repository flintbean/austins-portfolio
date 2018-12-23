import React from "react";
const ProjectInstance = props => {
  console.log(props)
  return (
    <div>
      <a href={props.project.link} style={{ textDecoration: "none", color: "#FF0000" }}>
        {props.project.name}
      </a>
      <p>{props.project.description}</p>
    </div>
  );
};

export default ProjectInstance;
