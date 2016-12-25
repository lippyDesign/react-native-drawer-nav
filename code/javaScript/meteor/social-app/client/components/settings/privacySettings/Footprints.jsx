import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Footprints extends Component {
    render() {
        
        // establish CSS classes
        let userLeavesFootprints = '';
        let userHidesFootprints = '';
        
        // If the footprints state of parent container (Privacy Settings) is '', meaning we failed to get data from servers,
        // we are going to get the footprints data from another variable in parent container.
        // else (if the footprints state of parent container is not '', meaning we have data, we are just going to use that data)
        if (this.props.footprints_state === '') {
            let footprints_selector = this.props.footprints_var
            switch (footprints_selector)
            {
               case true: userLeavesFootprints = "activeBorder"
               break;
               case false: userHidesFootprints = "activeBorder"
               break;
               default:  console.log("no footprints data yet");
            }
        } else {
            let footprints_selector = this.props.footprints_state
            switch (footprints_selector)
            {
               case true: userLeavesFootprints = "activeBorder"
               break;
               case false: userHidesFootprints = "activeBorder"
               break;
               default: console.log("no footprints data yet");
            }
        }

        return (
            <div>
                <h4>Am I leaving footprints when visiting other accounts?</h4>
                <div className="row">
                    <div className="col s6 center-align">
                        <h5><a href='#' className={userLeavesFootprints} onClick={this.props.leaveFootprintsTapped}>Yes</a></h5>
                    </div>
                    <div className="col s6 center-align">
                        <h5><a href='#' className={userHidesFootprints} onClick={this.props.hideFootprintsTapped}>No</a></h5>
                    </div>
                </div>
            </div>
        )
    }
}