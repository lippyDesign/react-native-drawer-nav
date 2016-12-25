import { Mongo } from 'meteor/mongo';
import { check, Match } from 'meteor/check';
import ValidUrl from 'valid-url';

Meteor.methods({
    'links.insert': function(url) {
        // ValidUrl.isUri(url)    checks if url is a valid url
        // The following will proceed if true and throw error if false:
        check(url, Match.Where(url => ValidUrl.isUri(url)));
        // generate a random string
        const token = Math.random().toString(36).slice(-5);
        // We are now ready to save the URL
        Links.insert({url, token, clicks: 0});
    }
});

export const Links = new Mongo.Collection('links');