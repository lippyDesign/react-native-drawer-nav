import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class WhoCanSeeMe extends Component {
    render() {

        // establish CSS classes
        let everyoneCanVisitUser = '';
        let nobodyCanVisitUser = '';
        
        // If the visitation state of parent container (Privacy Settings) is '', meaning we failed to get age from servers,
        // we are going to get the data from another variable in parent container.
        // else (if the visitation state of parent container is not '', meaning we have data, we are just going to use that data)
        if (this.props.can_everyone_visit_state === '') {
            let visit_selector = this.props.can_everyone_visit_var
            switch (visit_selector)
            {
               case true: everyoneCanVisitUser = "activeBorder"
               break;
               case false: nobodyCanVisitUser = "activeBorder"
               break;
               default:  console.log("no visitation data yet");
            }
        } else {
            let visit_selector = this.props.can_everyone_visit_state
            switch (visit_selector)
            {
               case true: everyoneCanVisitUser = "activeBorder"
               break;
               case false: nobodyCanVisitUser = "activeBorder"
               break;
               default: console.log("no visitation data yet");
            }
        }
        return (
            <div>
                <h4 className="center-align">Is my profile discoverable?</h4>
                <div className="row">
                    <div className="col s6 center-align"><h5><a href="#" className={everyoneCanVisitUser} onClick={this.props.everyoneCanVisitTapped}>Yes</a></h5></div>
                    <div className="col s6 center-align"><h5><a href="#" className={nobodyCanVisitUser} onClick={this.props.nobodyCanVisitTapped}>No</a></h5></div>
                </div>
            </div>
        )
    }
}