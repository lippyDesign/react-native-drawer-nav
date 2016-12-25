import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/Nav.jsx';
import CallNow from '../components/CallNow.jsx';
import Services from '../components/Services.jsx';

export default class ServicesPage extends Component {
  
  render() {
    
    return (
      <div>
        <Nav active='services'/>
        <CallNow/>
        <div className="">
          <Services/>
        </div>
      </div>
    );
  }
}