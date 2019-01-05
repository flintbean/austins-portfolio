import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="header-ctn">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav-link" onClick={this.props.hamSwitch}>
            <FontAwesomeIcon icon="home" size="lg"/>
          </div>
        </Link>
        <div className="nav-link" onClick={this.props.hamSwitch}>
          <FontAwesomeIcon icon="user-astronaut" size="lg"/>
        </div>
        <div className="nav-link" onMouseOver="Projects" onClick={this.props.hamSwitch}>
          <FontAwesomeIcon icon="folder-open" size="lg"/>
        </div>
        <a
          className="nav-link"
          href="https://github.com/flintbean"
          style={{ textDecoration: "none" }}
        >
          <FontAwesomeIcon icon={["fab", "github"]} size="lg" />
        </a>
      </div>
    );
  }
}

export default Header;
