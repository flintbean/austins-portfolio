import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hamburger from "./components/Hamburger/Hamburger";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTimes, faHome, faUserAstronaut, faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

library.add(fab, faTimes, faHome, faUserAstronaut, faFolderOpen);
class App extends Component {
  constructor() {
    super();
    this.state = {
      landing: true,
      hamburger: false
    };
  }
  hamburgerSwitch = () => {
    this.setState({ hamburger: !this.state.hamburger });
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Hamburger
            hamburgerSwitch={this.hamburgerSwitch}
            hamburger={this.state.hamburger}
          />
          <div className="App">
            <About />
            <Projects />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
