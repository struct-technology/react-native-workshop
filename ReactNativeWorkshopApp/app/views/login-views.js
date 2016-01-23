/* @flow weak */

/**
 * React Native Workshop App
 * https://github.com/struct-technology/react-native-workshop
 */
'use strict';
import React, {
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {branch} from 'baobab-react/higher-order';

import RCTMap from '../components/map-view';

import Dimensions from 'Dimensions';

import * as actions from '../actions/login-actions';

class LoginView extends Component {

  _changeText() {
    this.props.actions.changeUsername('Sergio');
    this.forceUpdate();
  }
  
  render() {

    return (
      <View style={styles.container}>
        <RCTMap style={styles.map} />
        <Text style={styles.label}>{this.props.user.username}</Text>
        <TouchableOpacity onPress={() => this._changeText()}>
          <Text style={{color: 'black'}}>Aperte aqui para mudar o nome</Text>
        </TouchableOpacity>
      </View>
    );
  }

}

// Subscribing to the relevant data and binding actions to the component
export default branch(LoginView, {
  cursors: {
    user: ['user']
  },
  actions: {
    changeUsername: actions.changeUsername
  }
});

const styles = StyleSheet.create({
  map: {
    width: 200, 
    height: 100
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
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
