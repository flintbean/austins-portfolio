import React from "react";
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
        <a href="#home" className="nav-link" style={{ textDecoration: "none" }}>
          <div onClick={this.props.hamSwitch}>
            <FontAwesomeIcon icon="home" size="lg" />
            &nbsp;&nbsp; Home
          </div>
        </a>
        <a
          href="#about"
          className="nav-link"
          style={{ textDecoration: "none" }}
        >
          <div onClick={this.props.hamSwitch}>
            <FontAwesomeIcon icon="user-astronaut" size="lg" />
            &nbsp;&nbsp; About
          </div>
        </a>
        <a
          href="#projects"
          className="nav-link"
          style={{ textDecoration: "none" }}
        >
          <div onClick={this.props.hamSwitch}>
            <FontAwesomeIcon icon="folder-open" size="lg" />
            &nbsp;&nbsp; Projects
          </div>
        </a>
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
