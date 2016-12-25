import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class LoginForm extends Component {
    render() {
        return (
            <div>
                <h5 className="center-align">Sign In</h5>
                <form onSubmit={this.props.handleLogin}>
                    <div className="input-field">
                        <input ref="user_info_to_login" type="text" className="validate"/>
                        <label htmlFor="user_info_to_login"><i className="fa fa-user" aria-hidden="true"></i> Username or email</label>
                    </div>
                    <div className="input-field">
                        <input ref="password_to_login" type="password" className="validate"/>
                        <label htmlFor="password_to_login"><i className="fa fa-lock" aria-hidden="true"></i> Password</label>
                    </div>
                    <button className="waves-effect teal accent-4 btn-large col s12">Login</button>
                </form>
            </div>
        )
    }
}