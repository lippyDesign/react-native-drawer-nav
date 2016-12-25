import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AboutComponent extends Component {

    getAboutData() {
        return (
            [{
                key: 'about 1',
                icon: 'fa fa-users fa-3x',
                bigText: 'About Us',
                smallText: 'Are you locked out and need to get in NOW? Do you want the greatest safety for you home and family? Do you want the best security to protect your business? A speedy response and attention to detail are vital attributes in our locksmiths. We have gathered together the best locksmiths in Bay Area that can quickly respond to your emergency needs. We know how important an expert professional locksmith can be to ensure the best security of your home, vehicle and office. We have a range of local Bay Area locksmiths that can cater to your local neighbourhood and the needs of your home or office 24 hour a day. Do you want to greatly reduce the chance of thefts and intrusions? The knowledge and skills of our expert locksmiths ensure that whatever problem you have with your locks, keys and security, it will be handled using the right techniques. The right locksmith can add an extra element of safety to your home, reducing the chance of theft – saving you money. We are your one-stop destination for all the inspired instructions and resources you need to make sure your home and office are safe and secure.'
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