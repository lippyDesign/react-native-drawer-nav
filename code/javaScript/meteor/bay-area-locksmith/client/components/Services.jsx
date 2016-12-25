import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ServiceComponent from './ServiceComponent.jsx';

export default class Services extends Component {

    getServices() {
        return (
            [
                {
                    key: '3',
                    icon: 'fa fa-home fa-2x',
                    bigText: 'Residential Lockout',
                    smallText: 'We provide residential locksmith services if you are locked out of your home or having issues with your locks. Our 20 minute response time guarantee ensures we can solve any home security issue for you immediately.'
                },
                {
                    key: '4',
                    icon: 'fa fa-car fa-2x',
                    bigText: 'Vehicular Lockout',
                    smallText: 'Our locksmiths provide high-quality vehicular services in SF Bay Area. We can help if you locked your keys inside your car interior, trunk, or if you have had an automotive lock out. Our locksmiths work with all brands of automobiles.'
                },
                {
                    key: '5',
                    icon: 'fa fa-building-o fa-2x',
                    bigText: 'Commercial Lockout',
                    smallText: 'As commercial experts, we are able to provide the best service in commercial locouts. Our locksmiths we will provide you with a plan to ensure the security of your business is maximized.'
                },
                {
                    key: '6',
                    icon: 'fa fa-lock fa-2x',
                    bigText: 'Lock Replacement',
                    smallText: 'Looking for a new lock? We supply a wide range of locks including: main door locks, garage door looks, gate locks, weatherproof padlocks, combination locks, heavy duty padlocks, high security locks.'
                }
            ]
        )
    }

    render() {

        let getServices = this.getServices().map(function(feature) {
            return (
                <div key={feature.key} className="col s12 l6 center-align">
                    <ServiceComponent icon={feature.icon} title={feature.bigText} text={feature.smallText}/>
                </div>
            )
        })

        return (
            <div className="container">
                <article className="row">
                    {getServices}
                </article>
            </div>
            
        )
    }
}