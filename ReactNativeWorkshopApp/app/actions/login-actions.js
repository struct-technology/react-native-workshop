/* @flow weak */

'use strict';
import tree from '../stores/tree';

var userCursor = tree.select('brands');

// Define actions object
export class LoginActions {

  function setUser(user) {

  }

  function resetUser() {

    userCursor.set({
      id: null,
      username: null,
      firstName: null,
      lastName: null,
      email: null,
      avatar: null
    });

  },

  // Check if there's a logged user already
  checkUser: function() {

  }

  // Logs in user
  function logUser() {

  }

  // Logs out user
  function logoutUser() {
    LoginActions.resetUser();
    NavigationActions.userDidLogout();
  }

  function resetPassword(email, callback) {

  }

};
