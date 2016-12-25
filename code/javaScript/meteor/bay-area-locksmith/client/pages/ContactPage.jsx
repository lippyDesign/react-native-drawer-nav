import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Nav from '../components/Nav.jsx';
import CallNow from '../components/CallNow.jsx';
import ContactComponent from '../components/ContactComponent.jsx';
import ContactForm from '../components/ContactForm.jsx';

export default class ContactPage extends Component {

  contactUsTapped(e) {
    e.preventDefault();

    const email_of_user = ReactDOM.findDOMNode(this.refs.contactForm.refs.email).value.trim();
    const name = ReactDOM.findDOMNode(this.refs.contactForm.refs.name).value.trim();
    const phone = ReactDOM.findDOMNode(this.refs.contactForm.refs.phone).value.trim();
    const city = ReactDOM.findDOMNode(this.refs.contactForm.refs.city).value.trim();
    const message_content = ReactDOM.findDOMNode(this.refs.contactForm.refs.message_content).value.trim();
    const combined_message = name + ' \n ' + phone + ' \n ' + city + ' \n ' + message_content;

    if (email_of_user !== '' && name !== '' && phone !== '' && city !== '' && message_content !== '') {
      Meteor.call('sendEmail', 'wouldntyou@liketoknow.com', email_of_user, 'NEW MESSAGE regarding Bay Area Locksmith', combined_message);

      ReactDOM.findDOMNode(this.refs.contactForm.refs.email).value = '';
      ReactDOM.findDOMNode(this.refs.contactForm.refs.name).value = '';
      ReactDOM.findDOMNode(this.refs.contactForm.refs.phone).value = '';
      ReactDOM.findDOMNode(this.refs.contactForm.refs.city).value = '';
      ReactDOM.findDOMNode(this.refs.contactForm.refs.message_content).value = '';

      Materialize.toast("Email Sent, Thank You", 4000);

    } else {
      Materialize.toast("Make sure all fields are field out", 4000);
    }

    

  }
  
    
  render() {
      
      return (
        <div>
            <Nav active='contact'/>
            <CallNow/>
            <div className="row">
              <div className="col s12 l6 offset-l3">
                <ContactComponent/>
              </div>
              <div className="col s12 l6 offset-l3">
                <ContactForm contactUsTapped={this.contactUsTapped.bind(this)} ref="contactForm"/>
              </div>
            </div>
        </div>
      );
  }
}