import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SignUpForm from '../components/signup/SignUpForm.jsx';
import LoginForm from '../components/login/LoginForm.jsx';
import FeatureList from '../components/features/FeatureList.jsx';
import Footer from '../components/footer/Footer.jsx';

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      messageClass: ""
    }
  }
  
  displayError(message) {
    this.setState({
      message: message,
      messageClass: "alert alert-danger register-error"
    })
  }
  
  handleSignup(event) {
    event.preventDefault();
    this.setState({message: "", messageClass: "hidden"})
    const first_name = ReactDOM.findDOMNode(this.refs.SignUpForm.refs.first_name).value.trim();
    const last_name = ReactDOM.findDOMNode(this.refs.SignUpForm.refs.last_name).value.trim();
    const email = ReactDOM.findDOMNode(this.refs.SignUpForm.refs.email).value.trim();
    const password = ReactDOM.findDOMNode(this.refs.SignUpForm.refs.password).value.trim();
    const accountInfo = {
      email,
      password,
      profile: {
        full_name: (first_name + last_name).toLowerCase(),
        first_name,
        last_name,
        avatar: 'http://placehold.it/150x150',
        friends: []
      }
    }
    Accounts.createUser(accountInfo, (error)=> {
      if (error) {
        this.displayError(error.reason);
      } else {
        FlowRouter.go('/dashboard');
      }
    })
  }
  
  render() {
    
    return (
      <div>
        <div className="jumbotron blue">
          <div className="container">
            <div className="row">
              <div className="col s12 l8">
                <h1>Got Dates?</h1>
                <p>Meet people, discover the world</p>
              </div>
              <div className="col s12 l4 right-align"> 
                <a href="/login" className="waves-effect waves-light blue darken-4 btn btn-large s9">Login</a>
                <a href="/register" id="signupButton" className="s3">Sign Up</a>
              </div>
            </div>
          </div>
        </div>
        <FeatureList/>
        <div className="container">
          <div className="row center-align">
            <div className="col s12 l4">
              <h1><i className="fa fa-smile-o" aria-hidden="true"></i></h1>
              <h4>Completely Free</h4>
              <p>Our service is free to use. We will never ask you to enter any kind of payment information</p>
            </div>
            <div className="col s12 l4">
              <h1><i className="fa fa-user" aria-hidden="true"></i></h1>
              <h4>User Centered</h4>
              <p>Our framework revolves around you. User experience is our top priority</p>
            </div>
            <div className="col s12 l4">
              <h1><i className="fa fa-bolt" aria-hidden="true"></i></h1>
              <h4>Lightning Fast</h4>
              <p>We understand that you do not want to waste your time. Quickly find users in your area. Communication is only a few clicks away.</p>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}