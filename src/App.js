import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleDefault, toggleContact, toggleAbout, toggleHobbies, togglePortfolio } from './actions/actions.js';

import './App.css';

import Contact from './components/contact.js';
import About from './components/about.js';
import Hobbies from './components/hobbies.js';
import Portfolio from './components/portfolio.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: null,
    }
  }

  componentDidMount() {
    this.props.toggleDefault()
  }
toggleRender = e => {
  console.log(e.target.innerText);
  this.setState({
    query: e.target.innerText
  })
}


  render() {
    console.log(this.props);
    return (
      <div className="parent">
        { !this.props.default ?
          <span className="nav-parent" onClick={this.props.toggleDefault}>
            <h1 onClick={this.toggleRender}>ABOUT</h1>
            <h1>CONTACT</h1>
            <h1>HOBBIES</h1>
            <h1>PORTFOLIO</h1>
          </span>
        : null }
        <div>
          {this.props.default && this.state.query == 'ABOUT' ?
            <p> asdasd </p>
            // <div>
            // <About />
            // <Contact />
            // <Hobbies />
            // <Portfolio />
            // </div>
          : null}
        </div>
      </div>

  )};
}

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      toggleDefault: toggleDefault,
      toggleContact: toggleContact,
      toggleAbout: toggleAbout,
      toggleHobbies: toggleHobbies,
      togglePortfolio: togglePortfolio,
    }, dispatch)
};

  const mapStateToProps = state => {
    return {
      default: state.toggle_default,
      contact: state.toggle_contact,
      about: state.toggle_about,
      hobbies: state.toggle_hobbies,
      portfolio: state.toggle_portfolio
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
