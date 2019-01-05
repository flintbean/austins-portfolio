import React from "react";
import Header from "../Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Hamburger.css'

const Hamburger = props => {
  return (
    <React.Fragment>
      {props.hamburger ? (
        <React.Fragment>
          <Header hamSwitch={props.hamburgerSwitch} />
          <div className="hamburger-exit" onClick={props.hamburgerSwitch}>
            <FontAwesomeIcon icon="times"/>
          </div>
        </React.Fragment>
      ) : (
        <div className="hamburger-ctn" onClick={props.hamburgerSwitch}>
          <div className="hamburger-bar" />
          <div className="hamburger-bar" />
          <div className="hamburger-bar" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Hamburger;