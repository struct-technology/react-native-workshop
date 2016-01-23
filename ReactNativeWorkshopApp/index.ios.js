/* @flow weak */

/**
 * React Native Workshop App
 * https://github.com/struct-technology/react-native-workshop
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  View,
  Text,
  Navigator
} from 'react-native';

import {root} from 'baobab-react/higher-order';
import tree from './app/stores/tree.js';

//import Home from './app/views/home.js';
import LoginView from './app/views/login-views.js';
//import Signup from './app/views/signup.js';


class ReactNativeWorkshopApp extends Component {

  renderScene(route, nav) {
    switch (route.id) {
      case 'home':
        return <LoginView />;
      case 'login':
        return <LoginView />;
      case 'signup':
        return <LoginView />;
      default:
        return <LoginView />;
    }
  } 
  
  render() {

    return (
      <View style={{flex: 1}}>
        <Navigator
          initialRoute={{name: 'My First Scene', index: 0}}
          renderScene={this.renderScene}
          sceneStyle={{backgroundColor: 'transparent', width: 300, height: 300}}
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
