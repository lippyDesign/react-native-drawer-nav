import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

class Accounts extends Component {

    componentDidMount() {
        // Render the blaze accounts form, then find div we just rendered in the 'render' method
        // and place the Blaze accounts form into the div
        // we are saving everything into this.view instance only to be able to clean it up later on
        this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
    }

    componentWillUnmount() {
        // Go finnd the forms we just created and destroy them
        // We need to clean up those forms ourselves
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container"></div>
        );
    }
}

export default Accounts;