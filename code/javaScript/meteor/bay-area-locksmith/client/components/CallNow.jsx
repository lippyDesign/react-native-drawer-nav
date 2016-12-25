import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class CallNow extends Component {

    render() {

        return (
            <div className="callNow grey lighten-3 center-align">
                <div className="">
                    <h5>Bay Area Locksmith: <i className="fa fa-clock-o"></i> 24 Hours a Day, <i className="fa fa-bolt"></i> Lightning Fast Service. Call Now! <a href="tel:+14087979671" className="btn-large green darken-2"><i className="fa fa-phone-square" aria-hidden="true"></i> (408) 797-9671</a></h5>
                </div>
            </div>
        )
    }
}