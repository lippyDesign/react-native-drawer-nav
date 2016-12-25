var imageDetails = new Mongo.Collection('images');

Slingshot.fileRestrictions("uploadToAmazonS3", {
    allowedFileTypes: ["image/png", "image/jpeg", "image/gif"],
    maxSize: 2 * 1024 * 1024
})

Slingshot.createDirective("uploadToAmazonS3", Slingshot.S3Storage, {
    AWSAccessKeyId: "AKIAI4VWUMOG6YLMJ4EQ",
    AWSSecretAccessKey: "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",
    bucket: "lipidesign-dating-app",
    region: "us-west-1",
    acl: "public-read",

    authorize: function() {
        if (!this.userId) {
            var message = "Please login before posting images";
            throw new Meteor.Error("Login Required", message);
        }
        return true
    },

    key: function (file) {
        var unique = Random.hexString(16);
        var user = Meteor.users.findOne(this.userId);
        return user.emails[0].address + "/previewImage" + "/" + unique + file.name
    }

})