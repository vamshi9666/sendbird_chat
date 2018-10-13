import React, { Component } from 'react';
import { connect } from 'react-redux'
import Message from '../components/message'
import {
	ListGroup,
	ListGroupItem
} from 'react-bootstrap';

class MessageList extends Component {
	constructor(props) {
		super(props);

	}
	render() {
		return (
			<div className="message-list">
				<ul>
					{
						this.props.messages.map(message => {
							return (
								<Message username={this.props.user} text={message.message} />
							)
						})
					}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		messages: state.message.messages
	}
}


export default connect(mapStateToProps, { }) (MessageList);
