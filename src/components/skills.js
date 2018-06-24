import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleSkills } from '../actions/actions.js';

import '../css/skills.css';
const redux = `https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&alt=media`
const Skills = props => {
  return (
    <div className="skills-parent">
      <div className="skills-child">
        <i class="devicon-ruby-plain colored"></i>
        <i class="devicon-javascript-plain colored"></i>
        <i class="devicon-html5-plain colored"></i>
        <i class="devicon-css3-plain colored"></i>
        <i class="devicon-jquery-plain colored"></i>
        <img alt="redux" src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&alt=media"/>
        <i class="devicon-rails-plain colored"></i>
        <i class="devicon-react-original colored"></i>
        <i class="devicon-postgresql-plain colored"></i>
        <i class="devicon-mongodb-plain colored"></i>
        <i class="devicon-git-plain colored"></i>
        <i class="devicon-atom-original colored"></i>
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
