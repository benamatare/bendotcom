import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleAbout } from '../actions/actions.js';

import '../css/about.css';
import IMG from "./profile.jpg"
const About = props => {

  return (
    <div className="about-parent">
      <header className="about-header">
        <h1> ben matare </h1>
        <p> full stack web developer </p>
        {/* <img alt="profile" src={ IMG }/> */}
      </header>
      <div className="about-content">
        <ul>
          <li> dota 2 nerd </li>
          <li> front-end is bae </li>
          <li> i like react </li>
          <li> i used redux for no reason </li>
        </ul>
      </div>
      <button className="back" onClick={props.toggleAbout}>
        Back
      </button>
    </div>
)};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleAbout: toggleAbout
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(About);
