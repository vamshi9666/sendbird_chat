import React, { Component } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types';
import { getChannels } from '../actions/channels'
import { 
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';


class SideBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            channels:[]
        }

    }
    componentWillMount (){
        this.props.getChannels()
        
    }
    render() {
        return (
            <div className="rooms-list">
                <ul>
                <h3>channels:</h3>
                <h5>first channel</h5> 
                <h5>Second channel</h5> 
                </ul>
            </div>
                    )
    }
}
SideBar.propTypes = {
    getChannels: propTypes.func.isRequired
}

export default  connect(null, { getChannels }) (SideBar);
