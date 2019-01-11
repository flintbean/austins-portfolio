import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
import {  CSSPlugin, AttrPlugin, TweenLite }  from "gsap/all";

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
const plugins = [ CSSPlugin, AttrPlugin ];

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
    TweenLite.to(window, 2, {scrollTo: "#about"});
  };

  render() {
    return (
      <Router>
        <div id="home">
          <Hamburger
            hamburgerSwitch={this.hamburgerSwitch}
            hamburger={this.state.hamburger}
          />
          <Landing scrollTween={this.scrollTween} />
          <div className="App" id="about">
            <About />
            <Projects />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
