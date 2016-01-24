'use strict';

import React, { 
	View, 
	Text 
} from 'react-native';

export class MessageBody extends React.Component {

  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    );
  }

}