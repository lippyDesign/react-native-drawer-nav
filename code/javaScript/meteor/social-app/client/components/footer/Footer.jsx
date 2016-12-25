import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
    render() {
        let footerTitle;
        let footerUrl;
        if (Meteor.userId()) {
            footerTitle = "Tell us what you think about our app"
            footerUrl = "/contact"
            
        } else {
            footerTitle = "Sign Up Now"
            footerUrl = "/register"
        }
        return (
            <footer className="page-footer blue darken-2">
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text"><a className="grey-text text-lighten-3" href={footerUrl}>{footerTitle}</a></h5>
                        <p className="grey-text text-lighten-4">The dating application for the 21st century.</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Other</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>
                            <li><a className="grey-text text-lighten-3" href="/share">Share</a></li>
                            <li><a className="grey-text text-lighten-3" href="/about">About</a></li>
                            <li><a className="grey-text text-lighten-3" href="/legal">Legal</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2016 Dating Site all rights reserved
                        <a className="grey-text text-lighten-4 right" href="#!">Help Us Grow</a>
                    </div>
                </div>
            </footer>
        )
    }
}