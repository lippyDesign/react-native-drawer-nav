import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class DistanceSelector extends Component {
    render() {

        // establish CSS classes
        let upTo5Var = '';
        let upTo25Var = '';
        let upTo50Var = '';
        let upTo75Var = '';
        let upTo100Var = '';
        let upTo250Var = '';
        // If the distance range state of parent container (Match Settings) is '', meaning we failed to get distance data from servers,
        // we are going to get the data from another variable in parent container.
        // else (if the distance range state of parent container (Match Settings) is not '', meaning we have data, we are just going to use that data)
        if (this.props.user_distance_state === '') {
            let distance_selector = this.props.users_distance_var
            switch (distance_selector)
            {
               case '5': upTo5Var = "activeBorder"
               break;
               case '25': upTo25Var = "activeBorder"
               break;
               case '50': upTo50Var = "activeBorder";
               break;
               case '75': upTo75Var = "activeBorder";
               break;
               case '100': upTo100Var = "activeBorder";
               break;
               case '250': upTo250Var = "activeBorder";
               break;
               default:  console.log("no distance data yet");
            }
        } else {
            let distance_selector = this.props.user_distance_state
            switch (distance_selector)
            {
               case '5': upTo5Var = "activeBorder"
               break;
               case '25': upTo25Var = "activeBorder"
               break;
               case '50': upTo50Var = "activeBorder";
               break;
               case '75': upTo75Var = "activeBorder";
               break;
               case '100': upTo100Var = "activeBorder";
               break;
               case '250': upTo250Var = "activeBorder";
               break;
               default:  console.log("no distance data yet");
            }
        }
        /////////////////////////////////////////////////////////// Distance From Current Location or City ////////////////////////////

        // establish distance_from to fill in the value of input if from city selected else we'll make it blank
        let distance_from = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.distance_from : ''
        // establish CSS classes
        let fromCurrentLocation = '';
        let fromCity = '';
        // If the distance from state of parent container (Match Settings) is '', meaning we failed to get age data from servers,
        // we are going to get the distance from data from another variable in parent container.
        // else (if the distance from state of parent container (Match Settings) is not '', meaning we have data, we are just going to use that data)
        if (this.props.distance_from_state === '') {
            let distance_from_selector = this.props.distance_from_var
            if (distance_from_selector === "Current Location") {
                fromCurrentLocation = "activeBorder"
                distance_from = ''
            } else {
                fromCity = "activeBorder"
            }
        } else if (this.props.distance_from_state === "Current Location") {
            fromCurrentLocation = "activeBorder"
            distance_from = ''
        } else {
            fromCity = "activeBorder"
        }
        
        return (
            <div>
                <h6>Within</h6>
                <div className="row">
                    <div className="col s4 center-align">
                        <a href="#" className={upTo5Var} onClick={this.props.upTo5tapped}>5 miles</a>
                    </div>
                    <div className="col s4 center-align">
                        <a href="#" className={upTo25Var} onClick={this.props.upTo25tapped}>25 miles</a>
                    </div>
                    <div className="col s4 center-align">
                        <a href="#" className={upTo50Var} onClick={this.props.upTo50tapped}>50 miles</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4 center-align">
                        <a href="#" className={upTo75Var} onClick={this.props.upTo75tapped}>75 miles</a>
                    </div>
                    <div className="col s4 center-align">
                        <a href="#" className={upTo100Var} onClick={this.props.upTo100tapped}>100 miles</a>
                    </div>
                    <div className="col s4 center-align">
                        <a href="#" className={upTo250Var} onClick={this.props.upTo250tapped}>250 miles</a>
                    </div>
                </div>
                <h6>From</h6>
                <div className="row">
                    <div className="col s11 offset-s1">
                        <a href="#" className={fromCurrentLocation} onClick={this.props.fromCurrentLocationTapped}>Current Location</a>
                    </div>
                    <div className="col s12">
                        <p className="center-align">or</p>
                    </div>
                    <div className="col s11 offset-s1">
                        <form className={fromCity}>
                            <input defaultValue={distance_from} placeholder="City" ref="city_of_user" type="text" className="validate" onChange={this.props.fromCityTapped}/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}