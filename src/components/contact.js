import React from 'react';
import '../css/contact.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleContact } from '../actions/actions.js';

const Contact = props => {
  return (
    <div className="contact-parent">
      <div className="contact-icon-parent">
        <div className="icon-child">
          <a class="contact-email" href="mailto:ben.a.matare@gmail.com">
            <i class="fas fa-inbox"></i>
          </a>
        </div>
        <div className="icon-child">
          <a href="https://learn.co/benamatare/resume">
            <i class="fas fa-file-download"></i>
          </a>
        </div>
        <div className="icon-child">
          <a href="https://medium.com/@ben.a.matare">
            <i class="fab fa-medium-m"></i>
          </a>
        </div>
        <div className="icon-child">
          <a href="https://twitter.com/a_matare">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div className="icon-child">
          <a href="https://www.linkedin.com/in/benmatare/">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="icon-child">
          <a href="https://github.com/benamatare">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
      <button className="back" onClick={props.toggleContact}>
        back
      </button>
    </div>
)};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleContact: toggleContact
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Contact);
