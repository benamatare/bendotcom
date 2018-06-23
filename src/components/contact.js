import React from 'react';
import '../css/contact.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleContact } from '../actions/actions.js';

const Contact = props => {
  return (
    <div className="contact">
      <h1 className="content-header"> Contact Info </h1>
      <h2 className="email"> ben.a.matare@gmail.com </h2>
      <h2 className="linked-in"> linkedIn icon goes here </h2>
      <h2 className="github"> github icon goes here </h2>
      <h2 className="twitter"> twitter icon goes here </h2>
      <button onClick={props.toggleContact}>asdasd</button>
    </div>
)};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleContact: toggleContact
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Contact);
