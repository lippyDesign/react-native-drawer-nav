import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class SideNav extends Component {

  constructor() {
        super();
        this.state = {
            spinnerOrPower: "fa fa-power-off fa-2x"
        }
    }

  logUserOut() {
    this.setState({
      spinnerOrPower: "fa fa-spinner fa-spin fa-2x fa-fw"
    })
    Meteor.logout( function(er) {
      if (er) {
        Materialize.toast(er.reason, 4000);
        this.setState({
          spinnerOrPower: "fa fa-power-off fa-2x"
        })
      } else {
        this.setState({
          spinnerOrPower: "fa fa-power-off fa-2x"
        })
        FlowRouter.go('/');
      }
    }.bind(this));
  }
  
  render() {
    
    return (
        <ul className="sideNav white hide-on-med-and-down">
            <li><a href="#" onClick={this.props.toggleSideNav}><i className={this.props.sideNavButtonTitle} aria-hidden="true"></i></a></li>
            <li className={this.props.sideNavVisible}><a href="/dashboard"><i className="fa fa-home fa-2x" aria-hidden="true"></i></a></li>
            <li className={this.props.sideNavVisible}><a href="#"><i className="fa fa-search fa-2x" aria-hidden="true"></i></a></li>
            <li className={this.props.sideNavVisible}><a href="/profile"><i className="fa fa-user fa-2x" aria-hidden="true"></i></a></li>
            <li className={this.props.sideNavVisible}><a href="/likes"><i className="fa fa-heart fa-2x" aria-hidden="true"></i></a></li>
            <li className={this.props.sideNavVisible}><a href="/settings"><i className="fa fa-cog fa-2x" aria-hidden="true"></i></a></li>
            <li className={this.props.sideNavVisible}><a onClick={this.logUserOut.bind(this)} href="#"><i className={this.state.spinnerOrPower} aria-hidden="true"></i></a></li>
        </ul>
    );
  }
}