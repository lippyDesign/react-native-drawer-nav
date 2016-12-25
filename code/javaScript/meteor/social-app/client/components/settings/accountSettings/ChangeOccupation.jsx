import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ChangeOccupation extends Component {
  
    render() {

        let occupation_selector = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).profile.occupation : ''

        return (
            <div>
                <h4 className="center-align">Change Occupation</h4>
                <form onSubmit={this.props.changeOccupationTapped}>
                    <div className="row">
                        <div className="input-field">
                            <input defaultValue={occupation_selector} placeholder="Occupation" id="changeOccupation" type="text" ref="changeOccupation" className="validate"></input>
                        </div>
                    </div>
                    <div className="row">
                        <button className="waves-effect waves-light btn btn-large col s12">change occupation</button>
                    </div>
                </form>
            </div>
        )
    }
}