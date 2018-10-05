import React, { Component } from 'react';
import './styles.css'
import {
    Navbar,
    Input,
} from 'reactstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div className="nav-con">
                <Navbar color="light" light expand="md">
                    <Input  className="nav-search-form" name="email" id="exampleEmail" placeholder="Search " />
                </Navbar>
            </div>
        );
    }
}

export default NavBar;