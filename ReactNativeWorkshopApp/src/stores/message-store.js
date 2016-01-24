import alt from '../alt';
import MessageActions from '../actions/message-actions';

export class MessageStore {

  constructor() {

    this.loading = false;
    this.messages = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateMessages: MessageActions.UPDATE_MESSAGES,
      handleFetchMessages: MessageActions.FETCH_MESSAGES,
      handleMessagesFailed: MessageActions.MESSAGES_FAILED
    });
    
  }

  handleUpdateMessages(messages) {
    this.loading = false;
    this.messages = messages;
    this.errorMessage = null;
  }

  handleFetchMessages() {
    this.loading = true;
    this.messages = [];
  }

  handleMessagesFailed(errorMessage) {
    this.loading = false;
    this.errorMessage = errorMessage;
  }
}

export default alt.createStore(MessageStore, 'MessageStore');