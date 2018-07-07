import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleContact, toggleAbout, toggleSkills, togglePortfolio } from './actions/actions.js';
import Contact from './components/contact.js';
import About from './components/about.js';
import Skills from './components/skills.js';
import Portfolio from './components/portfolio.js';

import './App.css';

class App extends Component {
  render() {
   const RENDER_LOGIC = this.props.about || this.props.contact || this.props.skills || this.props.portfolio;
    return (
      <div className="nav-parent">
        {/* Parent Container for all Cards */}
        {/* If Card is clicked toggle it's redux state change, and render the card */}
        {/* RENDER_LOGIC states if any card is clicked don't render the Navigation cards, but render that component that is clicked */}
        { RENDER_LOGIC ? null :
          <div className="nav-child" onClick={this.props.toggleAbout}>
             <h1> about </h1>
          </div> }
        { this.props.about ? <About /> : null }

        { RENDER_LOGIC ? null :
          <div className="nav-child" onClick={this.props.toggleContact}>
            <h1> contact </h1>
          </div>}
        { this.props.contact ? <Contact /> : null }

        { RENDER_LOGIC ? null :
          <div className="nav-child" onClick={this.props.toggleSkills}>
            <h1> skills </h1>
          </div>}
        { this.props.skills ? <Skills /> : null }

        { RENDER_LOGIC  ? null :
          <div className="nav-child" onClick={this.props.togglePortfolio}>
            <h1> portfolio </h1>
          </div>}
        { this.props.portfolio ? <Portfolio /> : null }
        <span className="love"> made with a lil' react & redux for no reason </span>
      </div>
  )};
}

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      toggleContact: toggleContact,
      toggleAbout: toggleAbout,
      toggleSkills: toggleSkills,
      togglePortfolio: togglePortfolio,
    }, dispatch)
};

  const mapStateToProps = state => {
    return {
      contact: state.toggle_contact,
      about: state.toggle_about,
      skills: state.toggle_skills,
      portfolio: state.toggle_portfolio
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
