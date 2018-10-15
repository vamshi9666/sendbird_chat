import React, { Component } from 'react';
import {  connect } from 'react-redux';
import { connectChannel  } from '../actions/message';
import {
    Panel,
    Row,
    Button
} from 'react-bootstrap';

import '../styles.css';
import propTypes from 'prop-types'
class Channel extends Component {
    constructor(props){
        super(props);
        this.state = {
            instance:this.props.instance,
            isActive: false
        }
        this.openConnection = this.openConnection.bind(this)
    }
    openConnection () {
        this.props.connectChannel(this.state.instance);
        this.setState({
            isActive: true
        })
    }
    render() {
        return (
            <Panel bsStyle={this.state.isActive ? 'success' : 'primary' } onClick={this.openConnection} className="channel-one"  >
                <Panel.Heading>
                    {this.props.name}
                </Panel.Heading>
                <Button > connect </Button>
            </Panel>
        )

    }
}

Channel.propTypes = {
    name:propTypes.string.isRequired,
    instance: propTypes.object.isRequired,
    connectChannel : propTypes.func.isRequired
}
export default connect(null, { connectChannel }) (Channel);