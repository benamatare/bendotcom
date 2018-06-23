import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleHobbies } from '../actions/actions.js';

import '../css/hobbies.css';

const Hobbies = props => {
  return (
    <div className="hobbies">
      <h1 className="content-header">Hobbies? Info</h1>
    <ul>
      <li>dota 2</li>
      <li>web development</li>
      <li>trail running</li>
      <li>telling people ipa's taste good</li>
    </ul>
    <button onClick={props.toggleHobbies}>BACK</button>
    </div>
)};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleHobbies: toggleHobbies
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Hobbies);
