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

import {branch} from 'baobab-react/higher-order';
import * as actions from './app/actions/colors-action';

class ReactNativeWorkshopApp extends Component {
  
  constructor(props, context) {
    super(props, context);

    // Initial state
    this.state = {inputColor: null};
  }

  // Controlling the input's value
  updateInput(e) {
    this.setState({inputColor: e.target.value})
  }

  // Adding a color on click
  handleClick() {

    // Actions bound to the tree are available through `props.actions`
    this.props.actions.add(this.state.inputColor);

    // Resetting the input
    this.setState({inputColor: null});
  }
  
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
      </View>
    );
  }
}

// Subscribing to the relevant data and binding actions to the component
export default branch(ReactNativeWorkshopApp, {
  cursors: {
    colors: ['colors']
  },
  actions: {
    add: actions.addColor
  }
});

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

AppRegistry.registerComponent('ReactNativeWorkshopApp', () => ReactNativeWorkshopApp);
