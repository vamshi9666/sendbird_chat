import React, {Component} from 'react';
import {connect} from 'react-redux';
import Message from './message';

class MessageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="message-list-title">
          <h4>{this.props.title}</h4>
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
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.app.messages,
  };
};

export default connect(
  mapStateToProps,
  {},
)(MessageList);