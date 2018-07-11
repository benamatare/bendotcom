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
        <div className="child-detail">
          <h1> statdota </h1>
          <p> a platform for Dota 2 enthusiasts can go to view their recent match performance, some stats on their hero usage and a couple of charts of data </p><br></br>
          <p> <mark className="lightgrey">react | redux | chartjs | material ui | custom css </mark></p>
          <a alt="repo-link" href="https://github.com/benamatare/statdota">
            <i class="devicon-github-plain colored"></i>
          </a>
        </div>
      </div>

      <div className="portfolio-child">
        <a alt="moodify" href="https://youtu.be/7YXeMFeY6eM">
          <i class="fab fa-youtube"></i>
        </a>
        <div className="child-detail">
          <h1> moodify </h1>
          <p> a playlist generating web app, in which users can create playlists and apply a mood to songs, and subsequently the playlist. users are able to search for other user's playlist </p><br></br>
          <p> <mark className="lightgrey">ruby on rails | bcrypt | javascript | youtube api | semantic ui | custom css </mark></p>
          <a alt="repo-link" href="https://github.com/benamatare/moodify">
            <i class="devicon-github-plain colored"></i>
          </a>
        </div>
      </div>

      <div className="portfolio-child">
        <a alt="wantr" href="https://youtu.be/eo3DKU-xdFc">
          <i class="fab fa-youtube"></i>
        </a>
        <div className="child-detail">
          <h1> wantr </h1>
          <p> a lifestyle activity dashboard that allows users to establish goals with steps, then track the completion of goals and steps</p><br></br>
          <p> <mark className="lightgrey">ruby on rails | jquery | javascript | chartjs | semantic ui | custom css </mark></p>
          <a alt="repo-link" href="https://github.com/benamatare/wantr_front">
            <i class="devicon-github-plain colored"></i>
          </a>
        </div>
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
