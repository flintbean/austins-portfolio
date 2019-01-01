import React from "react";
import ProjectInstance from "./ProjectInstance";
import "./Projects.css";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="projects-ctn">
        <h1>Projects</h1>
        {projects.map(project => {
          return <ProjectInstance key={project.id} project={project} />;
        })}
      </div>
    );
  }
}

export default Projects;

const projects = [
  {
    id: 1,
    name: "Teamcomm",
    link: "https://www.teamcomm.app/landing",
    description:
      "A web app that helps distributed or remote teams with real-time document collaboration and scheduling meetings. Team Communicator is built with a React/Redux frontend (deployed to Netlify) and Node/Express backend (deployed to Heroku)."
  },
  {
    id: 2,
    name: "Conways Game of Life",
    link: "https://flintbean.github.io/Conways-Life/",
    description:
      "Web app that shows cell replication using the rules from Conways Game of Life. Done completely in React and deployed to gitpages"
  },
  {
    id: 3,
    name: "Lambda Mud",
    link: "https://github.com/flintbean/front-end-project-week",
    description:
      "Mud game using React for front-end and Python(Django) for back-end. Sockets are used for real-time chat between players"
  }
];

