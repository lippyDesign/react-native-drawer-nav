import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ForgotPasswordForm extends Component {
  
  render() {
    
    return (
      <div>
        <form className="" onSubmit={this.props.sendPassword}>
          <div className="input-field">
            <input id="emailForUsersPassword" type="email" className="validate" ref="emailForUsersPassword"/>
            <label htmlFor="emailForUsersPassword">Email</label>
          </div>
          <button className="waves-effect blue darken-2 btn right"><i className="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
      </div>
    );
  }
}