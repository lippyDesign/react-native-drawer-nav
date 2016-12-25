import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import SideNav from '../components/navigation/SideNav.jsx';
import LoggedInNav from '../components/navigation/LoggedInNav.jsx';
import Status from '../components/status/Status.jsx';
import Footer from '../components/footer/Footer.jsx';
import Post from '../components/posts/Post.jsx';
import Ad from '../components/ads/Ad.jsx';

class DashboardPage extends Component {
    constructor() {
        super();
        this.state = {
            image: '',
            filename: '',
            sideNavButtonTitle: "fa fa-angle-double-right",
            sideNavVisible: 'displayNone'
        }
    }

    getAds() {
        advertisementObject = {_id: 1, title: 'Some Company', text: 'My first Ad', image: 'http://placehold.it/75x75'}
        return advertisementObject
    }

    uploadFile(event) {
        event.preventDefault();
        FS.Utility.eachFile(e, function(file) {
            Images.insert(file, function(error, fileObject) {
                this.setState({image: fileObject._id, filename: fileObject.data.blob.name})
            })
        })

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
        const user_name = Meteor.users.findOne(Meteor.userId) ? Meteor.users.findOne(Meteor.userId).username : '';
        return (
            <div>
                <LoggedInNav/>
                <div className="row">
                    <div className="col s12 l9">
                        <Status username={user_name}/>
                        <Post uploadFile={this.uploadFile.bind(this)}/>
                    </div>
                    <div className="col s12 l3">
                        <Ad ad={this.getAds()}/>
                    </div>
                    
                </div>
                <SideNav sideNavButtonTitle={this.state.sideNavButtonTitle} sideNavVisible={this.state.sideNavVisible} toggleSideNav={this.toggleSideNav.bind(this)}/>
                <Footer/>
            </div>
        )
    }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, DashboardPage);