import React from 'react';
import '../App.css';

function Message(props) {
  return (
    <div className="bubble">
      <div className="talk-bubble tri-right left-top">
        <div className="talktext username-message ">
          <img className="pro-pic" src={props.imgUrl} alt="pro-pic" />
          {props.username}
        </div>
        <div className="talktext">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;