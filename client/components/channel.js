import React, { Component } from 'react';
import {
    Panel,
    Row
} from 'react-bootstrap';

import '../styles.css';

export default class Channel extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Row className="channel-one" >
                <Panel >
                    <Panel.Body>{this.props.name}</Panel.Body>
                </Panel>
            </Row>
        )

    }
}