import React, { Component } from "react";
import {  Card, Elevation } from "@blueprintjs/core";
import { Button } from 'reactstrap'
import propTypes from 'prop-types'
import {  connect } from 'react-redux';
import { connectChannel  } from '../redux/actions/channel';

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