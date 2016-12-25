import React from 'react';
import {mount} from 'react-mounter';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

import {MainLayout} from '../layouts/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';
import DashpoardPage from '../pages/DashboardPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import LegalPage from '../pages/LegalPage.jsx';
import SharePage from '../pages/SharePage.jsx';
import ProfilePage from '../pages/ProfilePage.jsx';
import SettingsPage from '../pages/SettingsPage.jsx';
import LikesPage from '../pages/LikesPage.jsx';

publicRoutes = FlowRouter.group({
    name: 'publicroutes'
});
privateRoutes = FlowRouter.group({
    name: 'privateroutes',
});
publicRoutes.route('/', {
    name: 'Home',
    action() {
        mount(MainLayout, {
            content: (<HomePage/>)
        });
    }
});
publicRoutes.route('/register', {
    name: 'Register',
    action() {
        mount(MainLayout, {
            content: (<RegisterPage/>)
        });
    }
});
publicRoutes.route('/login', {
    name: 'Login',
    action() {
        mount(MainLayout, {
            content: (<LoginPage/>)
        });
    }
});
publicRoutes.route('/about', {
    name: 'About',
    action() {
        mount(MainLayout, {
            content: (<AboutPage/>)
        });
    }
});
publicRoutes.route('/contact', {
    name: 'Contact',
    action() {
        mount(MainLayout, {
            content: (<ContactPage/>)
        });
    }
});
publicRoutes.route('/legal', {
    name: 'Legal',
    action() {
        mount(MainLayout, {
            content: (<LegalPage/>)
        });
    }
});
publicRoutes.route('/share', {
    name: 'Share',
    action() {
        mount(MainLayout, {
            content: (<SharePage/>)
        });
    }
});
privateRoutes.route('/dashboard', {
    name: 'Dashboard',
    action() {
        mount(MainLayout, {
            content: <DashpoardPage/>,
        })
    }
});
privateRoutes.route('/profile', {
    name: 'Profile',
    action() {
        mount(MainLayout, {
            content: <ProfilePage/>,
        })
    }
});
privateRoutes.route('/likes', {
    name: 'Likes',
    action() {
        mount(MainLayout, {
            content: <LikesPage/>,
        })
    }
});
privateRoutes.route('/settings', {
    name: 'Settings',
    action() {
        mount(MainLayout, {
            content: <SettingsPage/>,
        })
    }
});
