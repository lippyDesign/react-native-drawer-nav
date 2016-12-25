import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChangeCity extends Component {
  
    render() {

        let city_selector = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.city : ''

        return (
            <div>
                <h4 className="center-align">Change City</h4>
                <form onSubmit={this.props.changeCityTapped}>
                    <div className="row">
                        <div className="input-field">
                            <input defaultValue={city_selector} placeholder="Home City" id="changeCity" type="text" ref="changeCity" className="validate"></input>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn btn-large col s12">change city</button>
                    </div>
                </form>
            </div>
        )
    }
}