'use strict';

import React, {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicatorIOS,
} from 'react-native';

/* Alt/Flux */
import MessageStore from './stores/message-store';

/* Components */
import { MessageContainer } from './components/message-container';
import { LocationTextInput } from './components/location-text-input';

export class App extends React.Component {

  constructor() {
    
    super();
    
    this.state = MessageStore.getState();
    
    this.state.dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

  }

  componentDidMount() {
    MessageStore.listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    MessageStore.unlisten(this.onChange.bind(this));
  }

  onChange(state) {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(state.messages),
      messages: state.messages,
      loading: state.loading
    });
  }

  render() {

    // // Error State
    // if (this.state.errorMessage) {
    //   return (
    //   <View style={styles.inputContainer}>
    //     <Text style={[styles.errorText, {marginTop: 60}]}>
    //       {this.state.errorMessage}
    //     </Text>
    //   </View>
    //   );
    // }

    // Loading State
    if (this.state.loading) {
      return (
        <ActivityIndicatorIOS
          animating={true}
          style={[styles.centering, styles.loading]}
          size="large"
        />
      );
    }

    // Success State
    return (
      <View>
        <LocationTextInput />
        <ListView
          initialListSize={10}
          pageSize={4}
          scrollRenderAheadDistance={2000}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          removeClippedSubviews={true}
          scrollEnabled={true}
          style={styles.messagesView}
        />
      </View>
    );

  }

  renderRow(message){
    return (
      <MessageContainer message={message} />
    );
  }
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: 'white'
  },
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 10
  },
  messagesView: {
    backgroundColor: 'white',
    height: require('Dimensions').get('window').height - 50
  },
  errorText: {
    fontFamily: 'Avenir',
    fontSize: 20
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    height: 100,
    marginTop: 60
  }
});