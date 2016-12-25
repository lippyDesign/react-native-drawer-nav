import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import WhoCanSeeMe from './WhoCanSeeMe.jsx';
import Footprints from './Footprints.jsx';
import ShowMyOccupation from './ShowMyOccupation.jsx'

export default class PrivacySettings extends Component {
    constructor() {
        super();
        this.state = {
            can_everyone_visit_state: '',
            footprints_state: '',
            users_occupation_state: ''
        }
    }

    everyoneCanVisitTapped(e) {
        e.preventDefault();
        this.setState({
            can_everyone_visit_state: true
        })
    }
    nobodyCanVisitTapped(e) {
        e.preventDefault();
        this.setState({
            can_everyone_visit_state: false
        })
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    leaveFootprintsTapped(e) {
        e.preventDefault();
        this.setState({
            footprints_state: true
        })
    }
    hideFootprintsTapped(e) {
        e.preventDefault();
        this.setState({
            footprints_state: false
        })
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    showOccupationTapped(e) {
        e.preventDefault();
        this.setState({
            users_occupation_state: true
        })
    }
    hideOccupationTapped(e) {
        e.preventDefault();
        this.setState({
            users_occupation_state: false
        })
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
    savePrivacySettings() {
        if (this.state.can_everyone_visit_state !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.user_discoverable": this.state.can_everyone_visit_state}});
        }
        if (this.state.footprints_state !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.user_leaves_footprints": this.state.footprints_state}});
        }
        if (this.state.users_occupation_state !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.users_occupation_showing": this.state.users_occupation_state}});
        }
    }

    render() {
        let can_everyone_visit_var = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.user_discoverable : ''
        let footprints_var = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.user_leaves_footprints : ''
        let users_occupation_var = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.users_occupation_showing : ''
        return (
            <div>
                <div className="row">
                    <div className="col s12 l4 offset-l4 center-align">
                        <WhoCanSeeMe
                            can_everyone_visit_var={can_everyone_visit_var}
                            can_everyone_visit_state={this.state.can_everyone_visit_state}
                            everyoneCanVisitTapped={this.everyoneCanVisitTapped.bind(this)}
                            nobodyCanVisitTapped={this.nobodyCanVisitTapped.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4 center-align">
                        <Footprints
                            footprints_var={footprints_var}
                            footprints_state={this.state.footprints_state}
                            leaveFootprintsTapped={this.leaveFootprintsTapped.bind(this)}
                            hideFootprintsTapped={this.hideFootprintsTapped.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4 center-align">
                        <ShowMyOccupation
                            users_occupation_var={users_occupation_var}
                            users_occupation_state={this.state.users_occupation_state}
                            showOccupationTapped={this.showOccupationTapped.bind(this)}
                            hideOccupationTapped={this.hideOccupationTapped.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <button onClick={this.savePrivacySettings.bind(this)} className="waves-effect waves-light btn btn-large col s12">Save Changes</button>
                    </div>
                </div>
            </div>
        )
    }
}