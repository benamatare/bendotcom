import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { togglePortfolio } from '../actions/actions.js';

import '../css/portfolio.css';

const Portfolio = props => {
  return (
    <div className="portfolio-parent">
      <div className="portfolio-child">
        <a alt="statdota" href="https://youtu.be/oI93anYGcZE">
          <i class="fab fa-youtube"></i>
        </a>
      </div>

      <div className="portfolio-child">
        <a alt="moodify" href="https://youtu.be/7YXeMFeY6eM">
          <i class="fab fa-youtube"></i>
        </a>
      </div>

      <div className="portfolio-child">
        <a alt="wantr" href="https://youtu.be/eo3DKU-xdFc">
          <i class="fab fa-youtube"></i>
        </a>
      </div>
      <button className="back" onClick={props.togglePortfolio}>
        back
      </button>
    </div>
)};


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    togglePortfolio: togglePortfolio
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Portfolio);
