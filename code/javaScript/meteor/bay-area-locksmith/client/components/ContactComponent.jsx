import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ContactComponent extends Component {

    getAboutData() {
        return (
            [{
                key: 'contact 1',
                icon: 'fa fa-pencil fa-3x',
                bigText: 'Contact Us',
                smallText: 'Do you need help getting into your car, home or office? Do you have a question about your new locks? Do you know of a new and exciting product that we should share with our customers? Or maybe you have some feedback on how we can improve our service?'
            }]
        )
    }

    render() {
      
        let getAboutData = this.getAboutData().map(function(feature) {
            return (
                <div key={feature.key} className="col s12 center-align">
                    <h1><i className={feature.icon}></i></h1>
                    <h1>{feature.bigText}</h1>
                    <h5>{feature.smallText}</h5>
                </div>
            )
        })

      return (
        <div>
            <article>
                {getAboutData}
            </article>
        </div>
      );
  }
}