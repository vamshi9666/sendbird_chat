import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './message';
import { log } from 'util';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
      <div>
        <div className="message-list-title">
          <h4>{}</h4>
        </div>
        <ul className="message-list">
          {this.props.messages.map(message => {
            return (
              <Message
                imgUrl={message._sender.profileUrl}
                username={message._sender.userId}
                text={message.message}
              />
            );
          })}{' '}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.app.messages,
    targetUser: state.app.activeChannel.members||[],
    currentUser : state.user.user.userId||{}
  };
};

export default connect(
  mapStateToProps,
  {},
)(MessageList);
