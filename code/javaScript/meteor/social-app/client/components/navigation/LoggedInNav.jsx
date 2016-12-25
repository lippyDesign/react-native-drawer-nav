import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

class LoggedInNav extends Component {
    constructor() {
        super();
        this.state = {
            spinnerOrPower: "fa fa-power-off",
            logoutText: "Logout"
        }
    }

  logUserOut() {
    this.setState({
        spinnerOrPower: "fa fa-spinner fa-spin fa-3x fa-fw",
        logoutText: ''
    })
    Meteor.logout( function(er) {
      if (er) {
        this.setState({
            spinnerOrPower: "fa fa-power-off",
            logoutText: "Logout"
        })
        Materialize.toast(er.reason, 4000);
      } else {
        this.setState({
            spinnerOrPower: "fa fa-power-off",
            logoutText: "Logout"
        })
        FlowRouter.go('/');
      }
    }.bind(this));
  }
    
  render() {
    
    const user_name = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).username : 'Profile';
    return (
        <nav className="blue darken-2">
            <div className="nav-wrapper row">
                <a href="/dashboard" className="brand-logo col offset-m1 hide-on-med-and-down">Dating Site</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/dashboard"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                    <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i> Search</a></li>
                    <li><a href="/profile"><i className="fa fa-user" aria-hidden="true"></i> {user_name}</a></li>
                    <li><a href="/likes"><i className="fa fa-heart" aria-hidden="true"></i> Likes</a></li>
                    <li><a href="/settings"><i className="fa fa-cog" aria-hidden="true"></i> Settings</a></li>
                    <li><a onClick={this.logUserOut.bind(this)} href="#"><i className={this.state.spinnerOrPower} aria-hidden="true"></i> {this.state.logoutText}</a></li>
                </ul>
                <a href="/" className="brand-logo col offset-m1 left hide-on-large-only">DS</a>
                <ul className="right hide-on-large-only">
                    <li><a href="/dashboard"><i className="fa fa-home" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-search" aria-hidden="true"></i></a></li>
                    <li><a href="/profile"><i className="fa fa-user" aria-hidden="true"></i></a></li>
                    <li><a href="/likes"><i className="fa fa-heart" aria-hidden="true"></i></a></li>
                    <li><a href="/settings"><i className="fa fa-cog" aria-hidden="true"></i></a></li>
                    <li><a onClick={this.logUserOut.bind(this)} href="#"><i className={this.state.spinnerOrPower} aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, LoggedInNav);

