import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ContactForm extends Component {
    
    render() {
        return (
            <form onSubmit={this.props.contactUsTapped}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="name" type="text" className="validate" ref="name"/>
                        <label htmlFor="name"><i className="fa fa-user" aria-hidden="true"></i> Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="phone" type="tel" className="validate" ref="phone"/>
                        <label htmlFor="phone"><i className="fa fa fa-phone" aria-hidden="true"></i> Phone</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" ref="email"/>
                        <label htmlFor="email"><i className="fa fa-envelope" aria-hidden="true"></i> Email</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="city" type="text" className="validate" ref="city"/>
                        <label htmlFor="city"><i className="fa fa-map-marker" aria-hidden="true"></i> City</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="message_content" className="materialize-textarea" ref="message_content"></textarea>
                        <label for="message_content"><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className="waves-effect waves-light btn-large col s12"><i className="fa fa-paper-plane" aria-hidden="true"></i> Send</button>
                    </div>
                </div>
            </form>
        );
  }
}