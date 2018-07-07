import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSkills } from '../actions/actions.js';

import '../css/skills.css';

const Skills = props => {
  return (
    <div className="skills-parent">
      <div className="skills-child">
          <i class="devicon-ruby-plain-wordmark colored"></i>
          <i class="devicon-javascript-plain colored"></i>
          <i class="devicon-html5-plain-wordmark colored"></i>
          <i class="devicon-css3-plain-wordmark colored"></i>
          <i class="devicon-jquery-plain-wordmark colored"></i>
          <i class="devicon-rails-plain-wordmark colored"></i>
          <i class="devicon-react-original-wordmark colored"></i>
          <i class="devicon-git-plain colored"></i>
          <i class="devicon-atom-original colored"></i>
          <i class="devicon-postgresql-plain-wordmark colored"></i>
          <i class="devicon-mongodb-plain-wordmark colored"></i>
      </div>
      <button className="back" onClick={props.toggleSkills}>
        back
      </button>
    </div>
)};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleSkills: toggleSkills
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Skills);
