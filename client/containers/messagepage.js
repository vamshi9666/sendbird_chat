import React , { Component } from 'react'; 
import { connect } from 'react-redux'
import MessageList from '../components/messagelist';
import { ButtonGroup, Button } from 'react-bootstrap';

class MessagePage extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return (
            <div>
                <MessageList  messages={this.props.messages} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.message.messages,
        channelName : state.message.activeChannel.name
    }
}

export default connect(mapStateToProps, { }) (MessagePage);