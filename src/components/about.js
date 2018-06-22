import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDefault, toggleAbout } from '../actions/actions.js';

import '../css/about.css';

const About = props => {
console.log(props);
  function doubleToggle(){
    console.log('hi there');
    props.toggleDefault()
    props.toggleAbout()
  }
  return (
    <div className="about">
      <h1 className="content-header">Ben Matare</h1>
      <p> i like front end web development, react is like a godsend of things I would fall in love with react if i could siince ists the coolest web framework for javascript out there =ya know </p>
      <button onClick={doubleToggle} >go back</button>
    </div>
)};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleDefault: toggleDefault,
    toggleAbout: toggleAbout
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(About);
