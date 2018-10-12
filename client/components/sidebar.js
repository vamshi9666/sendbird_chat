import React, { Component } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types';
import { getChannels , addChannel } from '../actions/openchannel';
import Channel from './channel'
import { 
    Button
} from 'react-bootstrap';

class SideBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            newChannelName:''
        }

    }
    addChannel(e){
        e.preventDefault();
        this.props.addChannel()
    }
    componentDidMount (){

    }
    handleChange(e) {
        this.setState({newChannelName: e.target.value});
      }
    render() {     
        console.log(this.props);
           
        return (
            <div >
                 <h3>channels</h3>
                <ul>
                {this.props.openChannels.map(channel=> (
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
    openChannels: propTypes.array.isRequired,
    addChannel : propTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        openChannels : state.openChannel.channels
    }
}

export default  connect(mapStateToProps, { getChannels , addChannel}) (SideBar);
