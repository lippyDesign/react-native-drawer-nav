import { Meteor } from 'meteor/meteor';

import { Bins } from '../imports/collections/bins';

Meteor.startup(() => {

  Meteor.publish('bins', function() {
    return Bins.find({ ownerId: this.userId }); // mongo is going to search through records and only return the records where ownerId is the userId
  });

  // the following publications will only return the list of bins that have been shared with the user
  Meteor.publish('sharedBins', function() {
    const user = Meteor.users.findOne(this.userId);
    if (!user) { return; }
    const email = user.emails[0].address;
    return Bins.find({
      sharedWith: { $elemMatch: { $eq: email } }
    });
  });

});
