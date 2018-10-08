import React, { Component } from 'react';
import { Link } from 'react-router';
import {
    Navbar,
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
                        <Link to="/logout" >Logout</Link>
                    </NavItem>  
                </Nav>
            </Navbar>
        )
    }
}
export default NavComponent;