import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="landing">
          <div className="intro-text">
            Hi, I'm Austin. A Full Stack Web Developer Working Out of Southern
            California
          </div>
          <Link to="/about">
            <div className="next-text">
              Click to Learn More About Me
              <br />
              <FontAwesomeIcon icon="angle-double-down" size="lg" />
            </div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
