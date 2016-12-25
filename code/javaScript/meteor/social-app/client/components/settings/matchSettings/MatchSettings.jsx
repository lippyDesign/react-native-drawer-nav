import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import GenderSelector from './GenderSelector';
import AgeRange from './AgeRange.jsx';
import DistanceSelector from './DistanceSelector';

export default class MatchSettings extends Component {
    constructor() {
        super();
        this.state = {
            users_gender: '',
            user_likes_gender: '',
            did_user_choose_age: '',
            did_user_choose_distance: '',
            distance_from_state: ''
        }
    }
    userIsMaleTapped(e) {
        e.preventDefault();
        this.setState({
            users_gender: 'male'
        })
    }
    userIsFemaleTapped(e) {
        e.preventDefault();
        this.setState({
            users_gender: 'female'
        })
    }
    userLikesMalesTapped(e) {
        e.preventDefault();
        this.setState({
            user_likes_gender: 'males'
        })
    }
    userLikesFemalesTapped(e) {
        e.preventDefault();
        this.setState({
            user_likes_gender: 'females'
        })
    }
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    age18to20tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '18to20'
        })
    }
    age21to25tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '21to25'
        })
    }
    age26to30tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '26to30'
        })
    }
    age31to35tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '31to35'
        })
    }
    age36to40tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '36to40'
        })
    }
    age41to50tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '41to50'
        })
    }
    age51to60tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '51to60'
        })
    }
    age61to70tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '61to70'
        })
    }
    age71to80tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '71to80'
        })
    }
    age81to100tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '81to100'
        })
    }
    age100tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: '100+'
        })
    }
    allAgesTapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_age: 'All'
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    upTo5tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_distance: '5'
        })
    }
    upTo25tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_distance: '25'
        })
    }
    upTo50tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_distance: '50'
        })
    }
    upTo75tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_distance: '75'
        })
    }
    upTo100tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_distance: '100'
        })
    }
    upTo250tapped(e) {
        e.preventDefault();
        this.setState({
            did_user_choose_distance: '250'
        })
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    fromCurrentLocationTapped(e) {
        e.preventDefault();
        this.setState({
            distance_from_state: 'Current Location'
        })
        ReactDOM.findDOMNode(this.refs.distanceSelector.refs.city_of_user).value = '';
    }
    fromCityTapped(e) {
        e.preventDefault();
        this.setState({
            distance_from_state: 'From City'
        })
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // if the state is not '', than there were changes else the state is '' when the page loads.
    // So we save chanes if there were any, else we do nothing

    saveMatchSettings() {
        if (this.state.users_gender !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.users_gender": this.state.users_gender}});
        }
        if (this.state.user_likes_gender !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.user_likes_gender": this.state.user_likes_gender}});
        }
        if (this.state.did_user_choose_age !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.user_likes_ages": this.state.did_user_choose_age}});
        }
        if (this.state.did_user_choose_distance !== '') {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.user_likes_distance": this.state.did_user_choose_distance}});
        }
        if (this.state.distance_from_state !== '' && this.state.distance_from_state !== 'Current Location') {
            let distanceFrom = ReactDOM.findDOMNode(this.refs.distanceSelector.refs.city_of_user).value.trim();
            if (distanceFrom === '' || distanceFrom === ' ') {
                Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.distance_from": 'Current Location'}});
            } else {
                Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.distance_from": distanceFrom}});
            }
        } else {
            Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.distance_from": 'Current Location'}});
        }
        
         Materialize.toast("Match Settings Have Been Saved", 4000);
         FlowRouter.go('/dashboard');
    }
    
    render() {

        let age_selector = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.user_likes_ages : ''
        let users_gender_var = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.users_gender : ''
        let users_gender_pref = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.user_likes_gender : ''
        let users_distance_var = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.user_likes_distance : ''
        let distance_from_var = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.distance_from : ''
        return (
            <div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <GenderSelector
                            users_gender_var={users_gender_var}
                            users_gender_pref={users_gender_pref}
                            users_gender={this.state.users_gender}
                            user_likes_gender={this.state.user_likes_gender}
                            userIsMaleTapped={this.userIsMaleTapped.bind(this)}
                            userIsFemaleTapped={this.userIsFemaleTapped.bind(this)}
                            userLikesMalesTapped={this.userLikesMalesTapped.bind(this)}
                            userLikesFemalesTapped={this.userLikesFemalesTapped.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <AgeRange
                            age_selector={age_selector}
                            age={this.state.did_user_choose_age}
                            age18to20tapped={this.age18to20tapped.bind(this)}
                            age21to25tapped={this.age21to25tapped.bind(this)}
                            age26to30tapped={this.age26to30tapped.bind(this)}
                            age31to35tapped={this.age31to35tapped.bind(this)}
                            age36to40tapped={this.age36to40tapped.bind(this)}
                            age41to50tapped={this.age41to50tapped.bind(this)}
                            age51to60tapped={this.age51to60tapped.bind(this)}
                            age61to70tapped={this.age61to70tapped.bind(this)}
                            age71to80tapped={this.age71to80tapped.bind(this)}
                            age81to100tapped={this.age81to100tapped.bind(this)}
                            age100tapped={this.age100tapped.bind(this)}
                            allAgesTapped={this.allAgesTapped.bind(this)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <DistanceSelector
                            users_distance_var={users_distance_var}
                            user_distance_state={this.state.did_user_choose_distance}
                            upTo5tapped={this.upTo5tapped.bind(this)}
                            upTo25tapped={this.upTo25tapped.bind(this)}
                            upTo50tapped={this.upTo50tapped.bind(this)}
                            upTo75tapped={this.upTo75tapped.bind(this)}
                            upTo100tapped={this.upTo100tapped.bind(this)}
                            upTo250tapped={this.upTo250tapped.bind(this)}
                            distance_from_var={distance_from_var}
                            distance_from_state={this.state.distance_from_state}
                            fromCurrentLocationTapped={this.fromCurrentLocationTapped.bind(this)}
                            fromCityTapped={this.fromCityTapped.bind(this)}
                            ref="distanceSelector"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <button onClick={this.saveMatchSettings.bind(this)} className="waves-effect waves-light btn btn-large col s12">Save Changes</button>
                    </div>
                </div>
            </div>
        )
    }
}