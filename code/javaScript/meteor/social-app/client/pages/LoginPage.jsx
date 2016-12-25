import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import LoggedOutNav from '../components/navigation/LoggedOutNav.jsx';
import LoginForm from '../components/login/LoginForm.jsx';
import Footer from '../components/footer/Footer.jsx';
import ForgotPasswordForm from '../components/login/ForgotPasswordForm.jsx'

export default class LoginPage extends Component {
    
    constructor() {
        super();
        this.state = {
        isSpinnerVisible: false,
        isPasswordResetFormVisible: false
        }
    }
    
    handleSignIn(event) {
        event.preventDefault();
        
        // Display Loading Spinner
            this.setState({
            isSpinnerVisible: true
            })
    
        // Find the text field via the React refs
        const user_info = ReactDOM.findDOMNode(this.refs.loginForm.refs.user_info_to_login).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.loginForm.refs.password_to_login).value.trim();
    
        // Login user
        Meteor.loginWithPassword(user_info, password, (er) => {
        
        if (er) {
            Materialize.toast(er.reason, 4000);
            // Hide Loading Spinner
            this.setState({
            isSpinnerVisible: false
            })
            
        } else {
            // redirect to dashboard page
            FlowRouter.go('/dashboard');
        }
        });
    }
    
    togglePasswordResetForm(event) {
        event.preventDefault();
        
        if (this.state.isPasswordResetFormVisible) {
        this.setState({
            isPasswordResetFormVisible: false
        })
        } else {
        this.setState({
            isPasswordResetFormVisible: true
        })
        }
    }
  
  resetPassword(event) {
        event.preventDefault();
        
        const emailForUsersPassword = ReactDOM.findDOMNode(this.refs.passwordForm.refs.emailForUsersPassword).value.trim();
        
        if (emailForUsersPassword !== "") {
            Accounts.forgotPassword({email: emailForUsersPassword}, (er) => {
            if (er) {
            Materialize.toast(er.reason, 4000);
            } else {
            Materialize.toast("We sent you an email with instructions on how to reset your password", 6000);
            ReactDOM.findDOMNode(this.refs.passwordForm.refs.emailForUsersPassword).value = '';
            }
        })
        } else {
        Materialize.toast("Please enter a valid email", 6000);
        }
    }
    
    render() {
        
        const spinnerVisibilityClass = this.state.isSpinnerVisible ? 'center-align spinnerPadding' : 'center-align spinnerPadding isInvisible';
        const passwordResetForm = this.state.isPasswordResetFormVisible ? 'col s12 l4 offset-l4' : 'col s12 l4 offset-l4 isInvisible';
        
        return (
            <div>
                <LoggedOutNav/>
                <div className="row">
                    <div className={spinnerVisibilityClass}>
                        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                        <span>Loading...</span>
                    </div>
                    <div className='col s12 l4 offset-l4'>
                        <LoginForm ref="loginForm" handleLogin={this.handleSignIn.bind(this)} />
                    </div>
                    <div className="col s12 l4 offset-l4">
                        <a className="right" href="#" onClick={this.togglePasswordResetForm.bind(this)}>forgot password?</a>
                    </div>
                    <div className={passwordResetForm}>
                        <ForgotPasswordForm ref="passwordForm" sendPassword={this.resetPassword.bind(this)}/>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}