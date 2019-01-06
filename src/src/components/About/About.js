import React from "react";
import "./About.css";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="about-ctn">
        <h3 className="about-header">About Me</h3>
        <p className="about-text">
          This is where I am going to put a picture of myself and do a little
          explaining on what I like to do and my areas of expertise. The
          languages that I am good with and maybe the schools I went to?
        </p>
      </div>
    );
  }
}

export default About;
