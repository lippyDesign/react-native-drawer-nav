import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/Nav.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import MainFeatures from '../components/MainFeatures.jsx';

export default class HomePage extends Component {
  
  render() {
    
    return (
      <div>
        <Nav active='home'/>
        <Jumbotron/>
        <MainFeatures/>
      </div>
    );
  }
}