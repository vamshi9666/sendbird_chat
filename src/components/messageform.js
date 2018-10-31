import React , {Component} from 'react';
import {sendMessage} from '../redux/actions/channel';
import {Button} from 'react-bootstrap';
import { Icon, Intent } from "@blueprintjs/core";
import { connect  } from 'react-redux'
import '../App.css'
 class MessageForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            messgae : ''
        }
    }
    handleChange =(e) => {
        e.preventDefault();
        this.setState({
            messgae: e.target.value
        })
    }
    sendMessage =(e) => {
        e.preventDefault()
        this.props.sendMessage(this.state.messgae);
        this.setState({
            messgae:''
        })   
    }
    render(){
        return (
            <div className="message-form">
                <form onSubmit={this.sendMessage}>
                    <input
                        type="text"
                        value={this.state.messgae}
                        onChange={this.handleChange.bind(this)}
                        name="name"
                    />
                </form>

                <Button
                    className="btn btn-success"
                    type="submit">
                    <Icon icon="double-chevron-right"></Icon>
                </Button>
            </div>
        )
       
    }
}

export default connect(null, {sendMessage})(MessageForm)