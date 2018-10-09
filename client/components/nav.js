import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logOutAction } from '../actions/login';
import {
    Navbar,
    Button,
    NavItem,
    Nav
    
} from 'react-bootstrap';


class NavComponent extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Home</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem >
                        <Link to='login' >Login </Link>
                    </NavItem>
                    <NavItem >
                         <Button onClick={this.props.logOut} className="btn btn-danger" >Log out</Button>
                    </NavItem>  
                </Nav>
            </Navbar>
        )
    }
}


export default connect(null, { logOutAction  }) (NavComponent);