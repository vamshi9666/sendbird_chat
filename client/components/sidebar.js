import React, { Component } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types';
import { getChannels , addChannel } from '../actions/openchannel';
import Channel from './channel'
import { 
    Button
} from 'react-bootstrap';
import {  store } from '../index'

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            channels:[],
            newChannelName:''
        }

    }
    addChannel(e){
        e.preventDefault();
        this.props.addChannel()
    }
    componentWillMount (){
        this.setState({
            channels: store.getState().channel.channels
        })
    }
    handleChange(e) {
        this.setState({newChannelName: e.target.value});
      }
    render() {
        console.log(this.state.channels[0]);
        
        return (
            <div className="rooms-list">
                 <h3>channels</h3>
                <ul>
                {this.state.channels.map(channel=> (
                    <Channel  name={channel.name} />
                ))}
                <div>
                <input type="text" value={this.state.newChannelName} onChange={this.handleChange} />
                    <Button className="btn" onClick={this.addChannel.bind(this)}>  +  </Button>
                </div>
                    
                </ul>
            </div>
                    )
    }
}
SideBar.propTypes = {
    getChannels: propTypes.func.isRequired,
    addChannel : propTypes.func.isRequired
}

export default  connect(null, { getChannels , addChannel}) (SideBar);
