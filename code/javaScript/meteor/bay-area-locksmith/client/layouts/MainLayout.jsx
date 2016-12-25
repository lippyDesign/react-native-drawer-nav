import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import Footer from '../components/Footer.jsx';

export const MainLayout = ({content}) => (
    
    <div className="main-layout">
        <main>
            {content}
        </main>
        <Footer/>
    </div>
)