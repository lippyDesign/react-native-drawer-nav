import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Jumbotron extends Component {

    render() {

        return (
            <div className="jumboron grey lighten-3">
                <div className="container row">
                    <div className="col s12 l8">
                        <h1><i className="fa fa-unlock-alt" aria-hidden="true"></i> Bay Area Locksmith</h1>
                        <h5>Professional locksmiths, fast response, best prices</h5>
                    </div>
                    <div className="col s12 l4">
                        <h4>Call Now!</h4>
                        <a href="tel:+14087979671" className="btn-large green darken-2"><i className="fa fa-phone-square" aria-hidden="true"></i> (408) 797-9671</a>
                    </div>
                </div>
            </div>
        )
    }
}