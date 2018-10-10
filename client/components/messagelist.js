import React, { Component } from 'react';

import Message from '../components/message'
import {
    ListGroup,
    ListGroupItem
 } from 'react-bootstrap';

class MessageList extends Component {
	constructor(props){
		super(props);

	}
	render() {
        return (
              <div className="message-list">
	  	<ul>
			<Message username="vamshi"  text="hey" />
		</ul>
		</div>
        )
    }
}

export default MessageList;
