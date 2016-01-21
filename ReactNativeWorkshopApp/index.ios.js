/**
 * React Native Workshop App
 * https://github.com/struct-technology/react-native-workshop
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {root} from 'baobab-react/higher-order';
import tree from './app/stores/tree.js';

import MapView from './app/components/MapView';
//import * as actions from './app/actions/colors-action';

class ReactNativeWorkshopApp extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <MapView style={{width: 300, height:300}} /> 
      </View>
    );
  }
}

// Let's bind the component to the tree through the `root` higher-order component
const RootedApp = root(ReactNativeWorkshopApp, tree);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeWorkshopApp', () => RootedApp);
