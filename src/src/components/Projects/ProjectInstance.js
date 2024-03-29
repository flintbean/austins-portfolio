import React from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//TODO: Enlarge image on click

const ProjectInstance = props => {
  return (
    <div className={props.project.id % 2 === 0 ? "project" : "rev-project"}>
      <div className="info-ctn">
        <div className="text-title">
          <a
            className="project-title"
            href={props.project.link}
            style={{ textDecoration: "none" }}
          >
            {props.project.name}
          </a>
          <p>{props.project.description}</p>
        </div>
        <div className="proj-nav-ctn">
          <a className="proj-link" href={props.project.gitLink} style={{ textDecoration: "none" }}>
            <FontAwesomeIcon icon="code" size="lg" />
          </a>
          <a className="proj-link" href={props.project.link} style={{ textDecoration: "none"}}>
            <FontAwesomeIcon
              icon="external-link-alt"
              size="lg"
            />
          </a>
        </div>
      </div>
      <div className="pic-tech-ctn">
        <a href={props.project.link} style={{ textDecoration: "none" }}>
          <img
            className="project-pic"
            src={props.project.img}
            alt={props.project.name}
          />
        </a>
        <div className="tech-ctn">
          {props.project.tech.map((item, index) => {
            return (
              <div key={index} className="tech-item">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectInstance;
