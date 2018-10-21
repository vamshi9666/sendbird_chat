import React, {Component} from 'react';
import {connect} from 'react-redux';
import MessageList from '../components/messagelist';
import {ButtonGroup, Button} from 'react-bootstrap';
import {messagesInit} from '../actions/message';
import SendBird from 'sendbird';

class MessagePage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const sb = SendBird.getInstance();
    const channelHandler = new sb.ChannelHandler();
    channelHandler.onMessageReceived = (channel, message) => {
      this.props.messagesInit(channel);
    };
    sb.addChannelHandler(1, channelHandler);
  }
  render() {
    return (
      <div>
        <MessageList messages={this.props.messages} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.message.messages,
  };
};

export default connect(
  mapStateToProps,
  {messagesInit},
)(MessagePage);
