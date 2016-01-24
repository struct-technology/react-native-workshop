'use strict';

import React, { 
  View, 
  Text, 
  StyleSheet 
} from 'react-native';

export class MessageFooter extends React.Component {

  render() {
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>
          <Text style={styles.username}>{this.props.user} </Text>
          <Text >- {this.props.timestamp} with {this.props.retweets} retweets</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 2
  },
  footerText: {
    fontSize: 10
  },
  username: {
    fontWeight: '800'
  }
});
