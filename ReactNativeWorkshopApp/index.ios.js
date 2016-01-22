/* @flow weak */

/**
 * React Native Workshop App
 * https://github.com/struct-technology/react-native-workshop
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  View
} from 'react-native';

import {root} from 'baobab-react/higher-order';
import tree from './app/stores/tree.js';

import Home from './app/views/home.js';
import Login from './app/views/login.js';
import Signup from './app/views/signup.js';


class ReactNativeWorkshopApp extends Component {

  renderScene(route, nav) {
    switch (route.id) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'signup':
        return <Signup />;
      default:
        if (this.state.userCursor.get('id') === null) {
          return <Home loading={this.state.userCursor.get('id') === null} />;
        } else {
          return <Login />;
        }
    }
  } 
  
  render() {

    return (
      <View>
        <Navigator
          initialRoute={{name: 'My First Scene', index: 0}}
          renderScene={this.renderScene}
          configureScene={(route) => {
            if (route.sceneConfig) {
              route.sceneConfig.gestures = {};
              return route.sceneConfig;
            }
            route.sceneConfig = {
              ...Navigator.SceneConfigs.HorizontalSwipeJump,
              gestures: {}
            };
            return route.sceneConfig;
          }}
        />
      </View>
    );
  }
}

const RootedApp = root(ReactNativeWorkshopApp, tree);

AppRegistry.registerComponent('ReactNativeWorkshopApp', () => RootedApp);
