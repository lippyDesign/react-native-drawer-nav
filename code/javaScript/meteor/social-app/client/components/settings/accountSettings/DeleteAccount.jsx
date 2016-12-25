import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class DeleteAccount extends Component {
  
    render() {
        return (
            <div>
                <div className="row">
                    <h4 className="center-align">Delete Account</h4>
                    <form onSubmit={this.props.deleteAccount}>
                        <div className="row">
                            <div className="input-field">
                                <input id="passwordToDeleteAccount" type="password" ref="passwordToDeleteAccount" className="validate"></input>
                                <label htmlFor="passwordToDeleteAccount">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <button onClick={this.props.deleteAccountTapped} className="waves-effect waves-light red btn btn-large col s12">delete account</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}