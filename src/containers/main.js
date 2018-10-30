import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import {
    Link
} from 'react-router-dom'
import "../App.css"
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavItem
} from 'reactstrap'
import home from './home';
import SignInContainer from './signin';

export default class Main extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="whole-con" >
                <Navbar color="light" >
                    <NavbarBrand href="/">SendBird</NavbarBrand>
                    <Nav>
                        <NavItem> <Link to="home" >Home</Link> </NavItem>
                    </Nav>
                </Navbar>
                <div>
                    <Switch>
                        <Route  path="/home" component={home} />
                        <Route exact path="/" component={SignInContainer} />
                    </Switch>
                </div>
            </div>
        )
    }
}