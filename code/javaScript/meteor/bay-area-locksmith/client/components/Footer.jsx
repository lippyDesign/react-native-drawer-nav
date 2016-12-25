import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {
    render() {
        return (
            <footer className="page-footer grey darken-3">
                <div className="container">
                    <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text"><a className="grey-text text-lighten-3" href='/'><i className="fa fa-unlock-alt" aria-hidden="true"></i> Bay Area Locksmith</a></h5>
                        <p className="grey-text text-lighten-4">The Locksmith for the 21st century.</p>
                        <p className="grey-text text-lighten-4">Call Now! <a href="tel:+14087979671" className="btn-large green darken-2"><i className="fa fa-phone-square" aria-hidden="true"></i> (408) 797-9671</a></p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">More Info:</h5>
                        <h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="/services">Services</a></li>
                                <li><a className="grey-text text-lighten-3" href="/about">About</a></li>
                                <li><a className="grey-text text-lighten-3" href="/contact">Contact</a></li>
                                <li><a className="grey-text text-lighten-3" href="/legal">Legal</a></li>
                            </ul>
                        </h5>
                    </div>
                    </div>
                </div>
                <div className="footer-copyright grey darken-4">
                    <div className="container">
                        <small>© 2016 Bay Area Locksmith all rights reserved</small>
                        <a className="grey-text text-lighten-4 right" href="/share">Help Us Grow</a>
                    </div>
                </div>
            </footer>
        )
    }
}