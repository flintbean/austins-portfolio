import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <div className="App">hi</div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
