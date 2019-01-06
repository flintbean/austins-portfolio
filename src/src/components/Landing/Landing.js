import React from "react";
import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Scroll from "react-scroll";

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
          <div className="next-text">
            Click to Learn More About Me
            <br/>
            <FontAwesomeIcon icon="angle-double-down" size="lg" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Landing;
