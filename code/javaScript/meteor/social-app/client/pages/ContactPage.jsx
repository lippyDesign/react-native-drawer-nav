import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Footer from '../components/footer/Footer.jsx'
import LoggedInNav from '../components/navigation/LoggedInNav.jsx'
import SideNav from '../components/navigation/SideNav.jsx'

export default class ContactPage extends Component {
    constructor() {
        super();
        this.state = {
            image: '',
            filename: '',
            sideNavButtonTitle: "fa fa-angle-double-right",
            sideNavVisible: 'displayNone'
        }
    }

    toggleSideNav(event) {
        event.preventDefault();
        if (this.state.sideNavVisible === 'displayNone') {
            this.setState({sideNavVisible: '', sideNavButtonTitle: "fa fa-angle-double-left"})
        } else {
            this.setState({sideNavVisible: 'displayNone', sideNavButtonTitle: "fa fa-angle-double-right"})
        }
        
    }

    render() {
        return (
            <div>
                <LoggedInNav/>
                <h3 className="center-align">Contact</h3>
                <SideNav sideNavButtonTitle={this.state.sideNavButtonTitle} sideNavVisible={this.state.sideNavVisible} toggleSideNav={this.toggleSideNav.bind(this)}/>
                <Footer/>
            </div>
        )
    }
}