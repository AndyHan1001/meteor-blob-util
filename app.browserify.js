if (Meteor.isServer) {
	blobUtil = Npm.require('blob-util');
} else {
	blobUtil = require('blob-util');
}