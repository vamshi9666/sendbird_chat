import React, { Component } from 'react';
import { Link } from 'react-router';
import propTypes from 'prop-types'
import { connect } from 'react-redux';
import { sbLogout } from '../actions/login';
import {
    Navbar,
    Button,
    NavItem,
    Nav

} from 'react-bootstrap';


class NavComponent extends Component {
    logout(e){
        this.context.router.push('/');
        window.location.reload()
    }
    render() {        
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        {this.props.user.isAuthenticated 
                        ? <Link to="/home"> Home</Link> 
                        : <Link to="/">Home</Link>      }
                        
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>

                    <NavItem >
                        {this.props.user.isAuthenticated ?
                            <Button onClick={this.logout.bind(this)} className="btn  btn-danger"> Log out </Button>
                            :
                            <Link to='login' >
                                <Button className="btn " > Login </Button>
                            </Link>
                        }
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}


NavComponent.propTypes = {
    sbLogout: propTypes.func.isRequired,
    user : propTypes.object.isRequired
}

NavComponent.contextTypes = {
    router: propTypes.object.isRequired
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
} 



export default connect(mapStateToProps, { sbLogout })(NavComponent);