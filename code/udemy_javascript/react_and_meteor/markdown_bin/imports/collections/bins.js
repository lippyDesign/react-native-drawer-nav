import { Mongo } from 'meteor/mongo';

Meteor.methods({
    // use old function instead of fat arrow function
    // because fat arrow function binds to surrounding content and we would not be able to use this.userId
    'bins.insert': function() {
        return Bins.insert({
            createdAt: new Date(),
            content: '',
            sharedWith: [],
            ownerId: this.userId
        });
    },

    'bins.remove': function(bin) {
        return Bins.remove(bin);
    },

    'bins.update': function(bin, content) {
        return Bins.update(bin._id, { $set: { content } } );
    },

    'bins.share': function(bin, email) {
        return Bins.update(bin._id, { $push: { sharedWith: email } })
    }
});

export const Bins = new Mongo.Collection('bins');