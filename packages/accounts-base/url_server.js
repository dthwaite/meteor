import {AccountsServer} from "./accounts_server.js";

// XXX These should probably not actually be public?

AccountsServer.prototype.urls = {
    resetPassword: function (token,absoluteUrlOptions) {
        return Meteor.absoluteUrl('#/reset-password/' + token,absoluteUrlOptions);
    },

    verifyEmail: function (token,absoluteUrlOptions) {
        return Meteor.absoluteUrl('#/verify-email/' + token,absoluteUrlOptions);
    },

    enrollAccount: function (token,absoluteUrlOptions) {
        return Meteor.absoluteUrl('#/enroll-account/' + token,absoluteUrlOptions);
    }
};
