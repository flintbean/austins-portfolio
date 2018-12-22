import React from "react";
import { Link } from "react-router-dom";

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
          <div className="nav-link">Home</div>
        </Link>
        <div className="nav-link">About</div>
        <div className="nav-link">Projects</div>
        <a
          className="nav-link"
          href="https://github.com/flintbean"
          style={{ textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>
    );
  }
}

export default Header;
