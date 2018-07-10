import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleAbout } from '../actions/actions.js';

import '../css/about.css';
import IMG from "./profile_desktop.png"

const About = props => {

  return (
    <div className="about-parent">
      <div className="about-header">
        <h1> ben matare </h1>
        <p> full stack web developer </p>
        <img alt="profile" src={IMG}/>
      </div>
      <div className="about-content">
        <ul>
          <li> us army vet </li>
          <li> dota 2 nerd </li>
          <li> front-end fiend </li>
          <li> i like react </li>
          <li> slovakian & zimbabwean </li>
          <p>
            national guard veteran, flatiron school graduate & lover of good design <br></br>
            trained in ruby on rails [backend], and react & redux [frontend] <br></br>
            tenacious attitude to learn new languages, frameworks & technologies <br></br>
            dove into web development after witnessing the power technology can have on businesses <br></br>
            and the ability to flex my creative muscles to solve unique problems <br></br>
            background in ecommerce & retail, operational knowledge of <br></br>
            amazon, ebay, walmart, shopify <br></br>
            embody a strong ethos of teamwork, passion & attention detail <br></br>
            live the <mark className="lightgrey">"work smarter, not harder"</mark> philosophy <br></br>
            <br></br>
            born in slovakia & part zimbabwean <br></br>
            passion for frontend code <br></br>
            big fan of react & redux <br></br>
            dota 2 player and esports watcher <br></br>
            used to race mountain bikes, and love a good trail run <br></br>
            mr taka ramen is divine ramen <br></br>
            catch me at a meetup <br></br>
            </p>
        </ul>
      </div>
      <button className="back" onClick={props.toggleAbout}>
        back
      </button>
    </div>
)};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    toggleAbout: toggleAbout
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(About);
