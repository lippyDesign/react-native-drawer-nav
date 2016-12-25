import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ChangePassword from './ChangePassword.jsx';
import ChangeOccupation from './ChangeOccupation.jsx';
import ChangeCity from './ChangeCity.jsx';
import DeleteAccount from './DeleteAccount.jsx';

export default class AccountSettings extends Component {
    
    render() {
        
        return (
            <div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <ChangeOccupation changeOccupationTapped={this.props.changeOccupationTapped} ref="changeOccupation"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <ChangeCity changeCityTapped={this.props.changeCityTapped} ref="changeCity"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <ChangePassword changePassworedTapped={this.props.changePassworedTapped} ref="changePassword"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l4 offset-l4">
                        <DeleteAccount deleteAccountTapped={this.props.deleteAccountTapped} ref="deleteAccount"/>
                    </div>
                </div>
            </div>
        )
    }
}