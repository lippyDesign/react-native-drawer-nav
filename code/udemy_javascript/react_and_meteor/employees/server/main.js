// Only executes on the server

import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {image, helpers} from 'faker'

import {Employees} from '../imports/collections/employees.js'

Meteor.startup( ()=> {
    // Great Place to generate data

    // Check to see if data exists in the collection
    // See if the collection has any records
    const numberRecords = Employees.find({}).count();
    if (!numberRecords) {
        // generate some data
        _.times(5000, ()=> {
            const {name, email, phone} = helpers.createCard();
            Employees.insert({
                name, email, phone, avatar: image.avatar()
            });
        });
    }

    Meteor.publish('employees', (per_page)=> {
        return Employees.find({}, {limit: per_page});
    })
});