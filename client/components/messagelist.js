import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem
 } from 'react-bootstrap';
 const conStyles = {
    'box-sizing': 'border-box',
    'padding-left': '6px',
    'width': '100%',
    'height': '100%',

}
const message ={
    'width':'700px'
}
class MessageList extends Component {
    render() {
        return (
            <div style={conStyles}>
                
                    <p>
                        hello dan
                    </p>        
                    <p> Hey vamshi</p>
                
            </div>
            
        )
    }
}

export default MessageList;