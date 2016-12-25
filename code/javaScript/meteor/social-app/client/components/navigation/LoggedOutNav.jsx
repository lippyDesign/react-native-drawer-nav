import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class LoggedOutNav extends Component {
  
  render() {
    
    return (
        <nav className="blue darken-2">
            <div className="nav-wrapper row">
                <a href="/" className="brand-logo col offset-m1 hide-on-med-and-down">Dating Site</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
                <a href="/" className="brand-logo col offset-m1 left hide-on-large-only">DS</a>
                <ul className="right hide-on-large-only">
                    <li><a href="/"><i className="fa fa-home" aria-hidden="true"></i></a></li>
                    <li><a href="/register"><i className="fa fa-user-plus" aria-hidden="true"></i></a></li>
                    <li><a href="/login"><i className="fa fa-sign-in" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </nav>
    );
  }
}