'use strict'

import React, { 
	View 
} from 'react-native';

import { MessageBody } from './message-body';
import { MessageFooter } from './message-footer';

export class MessageContainer extends React.Component {

  render () {
    let { body, ...props } = this.props.message;
    return(
      <View style={{padding: 10}}>
        <MessageBody body={body}/>
        <MessageFooter {...props}/>
      </View>
    );
  }
  
}