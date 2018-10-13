import React from 'react'
import '../styles.css'

function Message(props) {  
    return (
        <div className="message">
            <div className="message-username">{props.username}</div>
            <div class="bubble me">{props.text}</div>
        </div>
    )
}

export default Message;
