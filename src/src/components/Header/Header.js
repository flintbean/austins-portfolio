import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-ctn" onClick={this.props.hamSwitch}>
        <NavLink to="/" className="nav-link" style={{ textDecoration: "none" }}>
          <div onClick={this.props.hamSwitch}>
            <FontAwesomeIcon icon="home" size="lg" />
            &nbsp;&nbsp; Home
          </div>
        </NavLink>
        <NavLink
          to="/about/"
          className="nav-link"
          style={{ textDecoration: "none" }}
        >
          <div onClick={this.props.hamSwitch}>
            <FontAwesomeIcon icon="user-astronaut" size="lg" />
            &nbsp;&nbsp; About
          </div>
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link"
          style={{ textDecoration: "none" }}
        >
          <div onClick={this.props.hamSwitch}>
            <FontAwesomeIcon icon="folder-open" size="lg" />
            &nbsp;&nbsp; Projects
          </div>
        </NavLink>
        <a
          className="nav-link"
          href="https://github.com/flintbean"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
          &nbsp;&nbsp; Github
        </a>
        <a
          className="nav-link"
          href="https://www.linkedin.com/in/austin-merando/"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="lg" />
          &nbsp;&nbsp; Linked In
        </a>
      </div>
    );
  }
}

export default Header;
