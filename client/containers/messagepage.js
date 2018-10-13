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
                <div> 
                    <Button className="btn" > Edit </Button>
                    <Button className="btn btn-danger"> Delete </Button>    
                 </div>
                <MessageList messages={this.props.messages} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.message.messages,
        user: state.user.user,

    }
}

export default connect(mapStateToProps, { }) (MessagePage);