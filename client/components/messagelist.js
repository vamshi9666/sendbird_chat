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
			<li> Hell </li>
			<li> God </li>
		</ul>
		</div>
        )
    }
}

export default MessageList;
