import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class ServiceComponent extends Component {

    render() {

        return (
            <div>
                <h1><i className={this.props.icon}></i></h1>
                <h4>{this.props.title}</h4>
                <h5>{this.props.text}</h5>
            </div>
        )
    }
}