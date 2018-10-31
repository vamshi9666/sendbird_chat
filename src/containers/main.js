import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import {
    Link
} from 'react-router-dom'
import "../App.css"
import {
    Navbar, 
    NavbarDivider,
    NavbarHeading,
    NavbarGroup
} from '@blueprintjs/core'
import home from './home';
import SignInContainer from './signin';
import { connect } from 'react-redux';
import { Icon } from '@blueprintjs/core';
class Main extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="whole-con" >
                <Navbar className="bp3-dark">
                    <Navbar.Group align='left'>
                        <Navbar.Heading>Blueprint</Navbar.Heading>
                        <Navbar.Divider />
                        <p>{this.props.currentUser}</p>
                    </Navbar.Group>
                </Navbar>
                <div>
                    <Switch>
                        <Route path="/home" component={home} />
                        <Route exact path="/" component={SignInContainer} />
                    </Switch>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.user.userId
    }
}

export default connect(mapStateToProps, {})(Main)