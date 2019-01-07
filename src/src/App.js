import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Hamburger from "./components/Hamburger/Hamburger";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Landing from "./components/Landing/Landing";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faTimes,
  faHome,
  faUserAstronaut,
  faFolderOpen,
  faAngleDoubleDown
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { TimelineLite, CSSPlugin, AttrPlugin, TweenLite }  from "gsap/all";

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [ CSSPlugin, AttrPlugin ];

var tl = new TimelineLite();


library.add(
  fab,
  faTimes,
  faHome,
  faUserAstronaut,
  faFolderOpen,
  faAngleDoubleDown
);
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

  landingSwitch = () => {
    this.setState({ landing: !this.state.landing });
  };

  scrollTween = location => {
    // var about = document.getElementById("about");
    // TweenLite.to(window, 2, {scrollTo: about});
    console.log("Clicked")

  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Hamburger
            hamburgerSwitch={this.hamburgerSwitch}
            hamburger={this.state.hamburger}
          />
          <Landing scrollTween={this.scrollTween} />
          <div className="App">
            <About id="about" />
            <Projects id="projects" />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
