import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends Component {
    constructor() {
        super();
        this.state = {
            isMobileNavHidden: true
        }
    }

    toggleMobileNav() {
        this.setState({
            isMobileNavHidden: !this.state.isMobileNavHidden
        })
    }

    render() {

        let activeHome = '';
        let activeAbout = '';
        let activeServices = '';
        let activeContact = '';
        let activeReviews = '';
        if (this.props.active === 'home') {
            activeHome = 'activeMenu'
        } else if (this.props.active === 'services') {
            activeServices = 'activeMenu'
        } else if (this.props.active === 'about') {
            activeAbout = 'activeMenu'
        } else if (this.props.active === 'contact') {
            activeContact = 'activeMenu'
        } else if (this.props.active === 'reviews') {
            activeReviews = 'activeMenu'
        }

        const navClassName = this.state.isMobileNavHidden ? 'right hide-on-large-only mobileNav displayNone grey darken-4 center-align' : 'right hide-on-large-only mobileNav displayBlock grey darken-4 center-align';
        
        return (
            <div>
                <nav>
                    <div className="nav-wrapper grey darken-4">
                        <a href="/" className="brand-logo">Bay Area Locksmith</a>
                        <a onClick={this.toggleMobileNav.bind(this)} href="#" className="brand-logo right hide-on-large-only"><i className="fa fa-bars" aria-hidden="true"></i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className={activeHome}><a href="/"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                            <li className={activeServices}><a href="/services"><i className="fa fa fa-unlock" aria-hidden="true"></i> Services</a></li>
                            <li className={activeAbout}><a href="/about"><i className="fa fa-key" aria-hidden="true"></i> About</a></li>
                            <li className={activeReviews}><a href="/reviews"><i className="fa fa-thumbs-up" aria-hidden="true"></i> Reviews</a></li>
                            <li className={activeContact}><a href="/contact"><i className="fa fa-phone" aria-hidden="true"></i> Contact</a></li>
                        </ul>
                    </div>
                </nav>
                <ul className={navClassName}>
                    <li className={activeHome}><a href="/"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                    <li className={activeServices}><a href="/services"><i className="fa fa-lock" aria-hidden="true"></i> Services</a></li>
                    <li className={activeAbout}><a href="/about"><i className="fa fa-key" aria-hidden="true"></i> About</a></li>
                    <li className={activeReviews}><a href="/reviews"><i className="fa fa-thumbs-up" aria-hidden="true"></i> Reviews</a></li>
                    <li className={activeContact}><a href="/contact"><i className="fa fa-phone" aria-hidden="true"></i> Contact</a></li>
                </ul>
            </div>
            );
        }
}