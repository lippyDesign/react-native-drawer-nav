import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/Nav.jsx';
import AboutComponent from '../components/AboutComponent.jsx';
import CallNow from '../components/CallNow.jsx';

export default class AboutPage extends Component {

    render() {
      
      return (
        <div>
            <Nav active='about'/>
            <CallNow/>
            <div className="container">
              <AboutComponent/>
            </div>
        </div>
      );
  }
}