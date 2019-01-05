import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import "./App.css";

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
          {this.state.hamburger ? (
            <React.Fragment>
              <Header hamSwitch={this.hamburgerSwitch} />
              <div className="hamburger-exit" onClick={this.hamburgerSwitch}>X</div>
            </React.Fragment>
          ) : (
            <div className="hamburger-ctn" onClick={this.hamburgerSwitch}>
              <div className="hamburger-bar" />
              <div className="hamburger-bar" />
              <div className="hamburger-bar" />
            </div>
          )}

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
