import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class ShowMyOccupation extends Component {
    render() {

        // establish CSS classes
        let userShowsOccupation = '';
        let userHidesOccupation = '';
        
        // If the occupation state of parent container (Privacy Settings) is '', meaning we failed to get data from servers,
        // we are going to get the occupation data from another variable in parent container.
        // else (if the occupation state of parent container is not '', meaning we have data, we are just going to use that data)
        if (this.props.users_occupation_state === '') {
            let occupation_selector = this.props.users_occupation_var
            switch (occupation_selector)
            {
               case true: userShowsOccupation = "activeBorder"
               break;
               case false: userHidesOccupation = "activeBorder"
               break;
               default:  console.log("no occupation data yet");
            }
        } else {
            let occupation_selector = this.props.users_occupation_state
            switch (occupation_selector)
            {
               case true: userShowsOccupation = "activeBorder"
               break;
               case false: userHidesOccupation = "activeBorder"
               break;
               default: console.log("no occupation data yet");
            }
        }
        
        return (
            <div>
                <h4>Show my occupation to other users?</h4>
                <div className="row">
                    <div className="col s6 center-align">
                        <h5><a href="#" className={userShowsOccupation} onClick={this.props.showOccupationTapped}>Yes</a></h5>
                    </div>
                    <div className="col s6 center-align">
                        <h5><a href="#" className={userHidesOccupation} onClick={this.props.hideOccupationTapped}>No</a></h5>
                    </div>
                </div>
            </div>
        )
    }
}