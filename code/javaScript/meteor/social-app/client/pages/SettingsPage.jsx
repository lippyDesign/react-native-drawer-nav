import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

import Footer from '../components/footer/Footer.jsx'
import LoggedInNav from '../components/navigation/LoggedInNav.jsx'
import SideNav from '../components/navigation/SideNav.jsx'
import AccountSettings from '../components/settings/accountSettings/AccountSettings.jsx'
import MatchSettings from '../components/settings/matchSettings/MatchSettings.jsx'
import PrivacySettings from '../components/settings/privacySettings/PrivacySettings.jsx'

class SettingsPage extends Component {
    constructor() {
        super();
        this.state = {
            image: '',
            filename: '',
            sideNavButtonTitle: "fa fa-angle-double-right",
            sideNavVisible: 'displayNone',
            typeOfSettings: 'matchSettings',
        }
    }

    toggleSideNav(event) {
        event.preventDefault();
        if (this.state.sideNavVisible === 'displayNone') {
            this.setState({sideNavVisible: '', sideNavButtonTitle: "fa fa-angle-double-left"})
        } else {
            this.setState({sideNavVisible: 'displayNone', sideNavButtonTitle: "fa fa-angle-double-right"})
        }
    }

    showAccountSettings(e) {
        e.preventDefault();
        this.setState({
            typeOfSettings: 'accountSettings'
        })
    }

    showMatchSettings(e) {
        e.preventDefault();
        this.setState({
            typeOfSettings: 'matchSettings'
        })
    }

    showPrivacySettings(e) {
        e.preventDefault();
        this.setState({
            typeOfSettings: 'privacySettings'
        })
    }

    deleteAccountTapped(e) {
        e.preventDefault();
        /*
        this function will delete users account as long as user confirms to delete account and enters a valid password for the account;
        to match the password, we use the change password method from METEOR. After the password change (to the same password) had been successful,
        we delete the account
        */
        if (confirm("Delete this account?")) {

            let passwordToDeleteAccount = ReactDOM.findDOMNode(this.refs.accountSettings.refs.deleteAccount.refs.passwordToDeleteAccount).value.trim();

            Accounts.changePassword(passwordToDeleteAccount, passwordToDeleteAccount, (er)=> {
                if (er) {
                    Materialize.toast(er.reason, 4000);
                    return
                } else {
                    Meteor.users.remove({_id: Meteor.userId()});
                    Materialize.toast('Account Removed. Good By!', 4000);
                    FlowRouter.go('/');
                }
            });
        } else {
            return
        }
    }

    changePassworedTapped(e) {
        e.preventDefault();
        var oldPassword = ReactDOM.findDOMNode(this.refs.accountSettings.refs.changePassword.refs.oldPassword).value.trim();
        var newPassword = ReactDOM.findDOMNode(this.refs.accountSettings.refs.changePassword.refs.newPassword).value.trim();
        var confirmPassword = ReactDOM.findDOMNode(this.refs.accountSettings.refs.changePassword.refs.confirmPassword).value.trim();
        if (confirmPassword === newPassword && newPassword !== "") {
            Accounts.changePassword(oldPassword, newPassword, (er)=> {
                if (er) {
                    Materialize.toast(er.reason, 4000);
                } else {
                    Materialize.toast('New password has been set', 4000);
                    ReactDOM.findDOMNode(this.refs.accountSettings.refs.changePassword.refs.oldPassword).value = ''
                    ReactDOM.findDOMNode(this.refs.accountSettings.refs.changePassword.refs.newPassword).value = ''
                    ReactDOM.findDOMNode(this.refs.accountSettings.refs.changePassword.refs.confirmPassword).value = ''
                }
            });
        } else {
            Materialize.toast('Passwords do not match or a field is empty', 4000);
        }
    }

    changeOccupationTapped(e){
        e.preventDefault();
        var newOccupation = ReactDOM.findDOMNode(this.refs.accountSettings.refs.changeOccupation.refs.changeOccupation).value.trim();
        if (newOccupation !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.occupation": newOccupation}});
            Materialize.toast("Occupation changed to " + newOccupation, 4000);
        } else {
            Materialize.toast("Please enter your occupation", 4000);
        }
        
    }

    changeCityTapped(e){
        e.preventDefault();
        var newCity = ReactDOM.findDOMNode(this.refs.accountSettings.refs.changeCity.refs.changeCity).value.trim();
        if (newCity !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.city": newCity}});
            Materialize.toast("Home city changed to " + newCity, 4000);
        } else {
            Materialize.toast("Please enter your city", 4000);
        }
        
    }

    render() {
        
        let settingsType;
        let AccountSettingsActive;
        let MatchSettingsActive;
        let PrivacySettingsActive;
        if (this.state.typeOfSettings === 'accountSettings') {
            settingsType = <AccountSettings changeCityTapped = {this.changeCityTapped.bind(this)} changeOccupationTapped = {this.changeOccupationTapped.bind(this)} changePassworedTapped = {this.changePassworedTapped.bind(this)} deleteAccountTapped = {this.deleteAccountTapped.bind(this)} ref="accountSettings"/>
            MatchSettingsActive = ""
            AccountSettingsActive = "activeBorder"
            PrivacySettingsActive = ""
        } else if (this.state.typeOfSettings === 'matchSettings') {
            settingsType = <MatchSettings />
            MatchSettingsActive = "activeBorder"
            AccountSettingsActive = ""
            PrivacySettingsActive = ""
            
        } else if (this.state.typeOfSettings === 'privacySettings') {
            settingsType = <PrivacySettings/>
            MatchSettingsActive = ""
            AccountSettingsActive = ""
            PrivacySettingsActive = "activeBorder"
        }
        
        return (
            <div>
                <LoggedInNav/>
                <div className="card">
                    <div className="row">
                        <div className="col s4 center-align">
                            <h5><a className={MatchSettingsActive} href="#" onClick={this.showMatchSettings.bind(this)}><i className="fa fa-heart fa-2x" aria-hidden="true"></i><i className="fa fa-cog hide-on-large-only" aria-hidden="true"></i> <span className="hide-on-med-and-down">Match Settings</span></a></h5>
                        </div>
                        <div className="col s4 center-align">
                            <h5><a className={PrivacySettingsActive} href="#" onClick={this.showPrivacySettings.bind(this)}><i className="fa fa-lock fa-2x" aria-hidden="true"></i><i className="fa fa-cog hide-on-large-only" aria-hidden="true"></i> <span className="hide-on-med-and-down">Privacy Settings</span></a></h5>
                        </div>
                        <div className="col s4 center-align">
                            <h5><a className={AccountSettingsActive} href="#" onClick={this.showAccountSettings.bind(this)}><i className="fa fa-user fa-2x" aria-hidden="true"></i><i className="fa fa-cog hide-on-large-only" aria-hidden="true"></i> <span className="hide-on-med-and-down">Account Settings</span></a></h5>
                        </div>
                    </div>
                </div>
                <div>
                    {settingsType}
                </div>
                <SideNav sideNavButtonTitle={this.state.sideNavButtonTitle} sideNavVisible={this.state.sideNavVisible} toggleSideNav={this.toggleSideNav.bind(this)}/>
                <Footer/>
            </div>
        )
    }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, SettingsPage);