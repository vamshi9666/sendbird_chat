import React, { Component } from 'react';
import {
    Panel,
    Row
} from 'react-bootstrap';


export default class Channel extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Row>
                <Panel >
                    <Panel.Body>{this.props.name}</Panel.Body>
                </Panel>
            </Row>
        )

    }
}