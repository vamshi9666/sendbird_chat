import {connect} from 'react-redux';
import React, {Component} from 'react';
import propTypes from 'prop-types';
import {sendMessage} from '../actions/message';
import {Button} from 'react-bootstrap';
const inputStyle = {
  width: '75vh',
  marginRight: '20px',
};

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      message_input: '',
    };
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message_input);
    this.setState({
      message_input: '',
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      message_input: e.target.value,
    });
  }
  render() {
    return (
      <div className="message-form">
        <form onSubmit={this.sendMessage}>
          <input
            style={inputStyle}
            type="text"
            value={this.state.message_input}
            onChange={this.handleChange.bind(this)}
            name="name"
          />
        </form>
        <Button
          className="btn btn-success"
          onClick={this.sendMessage}
          type="submit">
          {' '}
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

MessageForm.propTypes = {
  sendMessage: propTypes.func.isRequired,
};
export default connect(
  null,
  {sendMessage},
)(MessageForm);
