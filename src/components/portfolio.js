import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePortfolio } from '../actions/actions.js';

import '../css/portfolio.css';

const Portfolio = props => {
  return (
    <div className="portfolio">
      <h1 className="content-header">Portfolio</h1>
      <h2> project #1</h2>
      <p> statdota a website for tracking your dota 2 stats and what not</p>
      <h2> project #2</h2>
      <p> wantr a website you can track your goals and assign steps and other bullshit </p>
      <h2>project #3</h2>
      <h2>project working on now</h2>
      <button onClick={props.togglePortfolio}>BACK</button>
    </div>
)};


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    togglePortfolio: togglePortfolio
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Portfolio);
