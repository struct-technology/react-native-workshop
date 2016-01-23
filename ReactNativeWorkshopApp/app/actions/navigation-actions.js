/* @flow weak */

'use strict';
import tree from '../tree';
import {Navigator} from 'react-native';

var _navigator = null;

// Define actions object

export var NavigationActions = {

  setNavigator(navigator:Array<any>) {
    _navigator = navigator;
  },

  gotoSignup() {
    _navigator.push({
      id: 'signup',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromBottom,
        gestures: {}
      }
    });
  },

  gotoLogin() {
    _navigator.push({
      id: 'login',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromBottom,
        gestures: {}
      }
    });
  },

  userDidLogin() {
    _navigator.push({
      id: 'home',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromBottom,
        gestures: {}
      }
    });
  },

  userDidLogout() {
    _navigator.push({
      id: '',
      sceneConfig: {
        ...Navigator.SceneConfigs.FloatFromBottom,
        gestures: {}
      }
    });
  },

  back() {
    console.log(_navigator.getCurrentRoutes());
    if (_navigator.getCurrentRoutes().length > 1) _navigator.pop();
  }

}