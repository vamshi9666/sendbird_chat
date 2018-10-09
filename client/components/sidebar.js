import React, { Component } from 'react';
import { connect } from 'react-redux'
import propTypes from 'prop-types';
import { getChannels } from '../actions/channels'
import { 
    ListGroup,
    ListGroupItem
} from 'react-bootstrap';

const sidebarStyles = {
    'width':'300px'
   
}
const conStyles = {
    'box-sizing': 'border-box',
    'padding': '10px',
    'overflow': 'scroll',
    'height': '100%'
}
class SideBar extends Component {
    constructor(props){
        super(props);

    }
    componentWillMount (){
        this.props.getChannels()
    }
    render() {
        return (
            <div style={conStyles}>
                <ListGroupItem  href="#link1">Link 1</ListGroupItem>
                <ListGroupItem href="#link2">Link 2</ListGroupItem>
                <ListGroupItem >Trigger an alert</ListGroupItem>
            </div>
                    )
    }
}
SideBar.propTypes = {
    getChannels: propTypes.func.isRequired
}

export default  connect(null, { getChannels }) (SideBar);