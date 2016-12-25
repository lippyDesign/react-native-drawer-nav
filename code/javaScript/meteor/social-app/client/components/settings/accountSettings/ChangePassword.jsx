import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChangePassword extends Component {
  
    render() {
        return (
            <div>
                <div>
                    <h4 className="center-align">Change Password</h4>
                    <form onSubmit={this.props.changePassword}>
                        <div className="row">
                            <div className="input-field">
                                <input id="oldPassword" type="password" ref="oldPassword" className="validate"></input>
                                <label htmlFor="oldPassword">Old Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <input id="newPassword" type="password" ref="newPassword" className="validate"></input>
                                <label htmlFor="newPassword">New Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <input id="confirmPassword" type="password" ref="confirmPassword" className="validate"></input>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.props.changePassworedTapped} className="waves-effect waves-light btn btn-large col s12">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}