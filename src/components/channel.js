import React, { Component } from "react";
import Sendbird from 'sendbird';
import {  Card, Elevation } from "@blueprintjs/core";
import { Button } from 'reactstrap'
import propTypes from 'prop-types'
import {  connect } from 'react-redux';
import SendBird from 'sendbird'
import { connectChannel  } from '../redux/actions/channel';

class Channel extends Component {
    constructor(props){
        super(props);
        this.state = {
            instance:this.props.instance,
        }
        this.openConnection = this.openConnection.bind(this)
    }
    openConnection = () =>  {
        console.log(this.props);
        
        this.props.connectChannel(this.state.instance);

    }
    componentWillMount(){
        const props = this.props;
        let sb = SendBird.getInstance();

        let channelHandler  = new sb.ChannelHandler();
        
  
        channelHandler.onMessageReceived = function (channel, message){
        
            
          console.log(`update in channel ${channel} : ${message}`);
          props.connectChannel(channel);
          
        }
        sb.addChannelHandler('1', channelHandler)

  
    }
    render() {
        return (
            <Card onClick={this.openConnection} className="channel-one"  >
                <h5>
                    {this.props.name}
                </h5>
                <Button color="primary" > connect </Button>
            </Card>
        )

    }
}

Channel.propTypes = {
    name:propTypes.string.isRequired,
    instance: propTypes.object.isRequired,
    connectChannel : propTypes.func.isRequired
}
export default connect(null, { connectChannel }) (Channel);