/* @flow weak */

/**
 * React Native Workshop App
 * https://github.com/struct-technology/react-native-workshop
 */
'use strict';
import React, {
  AppRegistry,
  StatusBarIOS
} from 'react-native';

import { Navigation } from './src/nav';

class ReactNativeWorkshopApp extends React.Component {

  render() {
    return <Navigation/>
  }
  
}

AppRegistry.registerComponent('ReactNativeWorkshopApp', () => ReactNativeWorkshopApp);