import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleContact, toggleAbout, toggleHobbies, togglePortfolio } from './actions/actions.js';

import './App.css';

import Contact from './components/contact.js';
import About from './components/about.js';
import Hobbies from './components/hobbies.js';
import Portfolio from './components/portfolio.js';



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      stfu: null,
    }
  }
  render() {
    return (
     <div>

       <header>
         <h1 onClick={ this.props.toggleContact }>contact</h1>
         {this.props.contact ? <Contact /> : null }
         <h1 onClick={ this.props.toggleAbout }>about</h1>
         {this.props.about ? <About /> : null }
         <h1 onClick={ this.props.toggleHobbies }>hobbies</h1>
         {this.props.hobbies ? <Hobbies /> : null }
         <h1 onClick={ this.props.togglePortfolio }>portfolio</h1>
         {this.props.portfolio ? <Portfolio /> : null }
       </header>

       <div className="landing">
         <h1>adsasd</h1>
         <p> some garbage goes in here i think </p>
       </div>

  </div>
  )};
}

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      toggleContact: toggleContact,
      toggleAbout: toggleAbout,
      toggleHobbies: toggleHobbies,
      togglePortfolio: togglePortfolio
    }, dispatch)
};

  const mapStateToProps = state => {
    return {
      contact: state.toggle_contact,
      about: state.toggle_about,
      hobbies: state.toggle_hobbies,
      portfolio: state.toggle_portfolio
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
