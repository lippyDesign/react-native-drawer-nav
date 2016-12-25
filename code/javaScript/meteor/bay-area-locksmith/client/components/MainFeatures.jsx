import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MainFeature from './MainFeature.jsx';

export default class MainFeatures extends Component {

    getMainFeatures() {
        return (
            [
                {
                    key: '1',
                    icon: 'fa fa-clock-o fa-2x',
                    bigText: '24 Hour Service',
                    smallText: 'Do you need an emergency locksmith in SF Bay Area? Locked out of your car, office or home? We are available to help you 24 hours a day. Call us anytime and we will send a team member to help you right away.'
                },
                {
                    key: '2',
                    icon: 'fa fa-truck fa-2x',
                    bigText: 'Fast Responce',
                    smallText: 'Need a locksmith to come to you? We will come to you, no matter where you are in the Bay Area. From San Jose to San Francisco, each mobile locksmith is always near to perform any locksmith service you require.'
                }
            ]
        )
    }

    render() {

        let getMainFeatures = this.getMainFeatures().map(function(feature) {
            return (
                <div key={feature.key} className="col s12 l6 center-align">
                    <MainFeature icon={feature.icon} title={feature.bigText} text={feature.smallText}/>
                </div>
            )
        })

        return (
            <div className="container">
                <article className="row">
                    {getMainFeatures}
                </article>
            </div>
            
        )
    }
}