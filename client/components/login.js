import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux'
import { loginAction } from '../actions/login';
import {
    FormControl,
    FormGroup,
    ControlLabel,
    Button
} from 'react-bootstrap';

const formGroup = {
    'textAlign': 'center',
    'marginLeft': '20%',
    'marginRight': '20%',
    'display': 'flex',
    'flexDirection': 'column'
}

const btnCus ={
    'width': '100px',
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            nickName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(e){
        e.preventDefault();
        console.log(this.props);
        
        this.props.loginAction(this.state)
        this.context.router.push('/home')
    }
        
    
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div style={formGroup}>
                <form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <ControlLabel>User Name</ControlLabel>
                        <FormControl
                            bsSize="sm"
                            name="username"
                            type="text"
                            value={this.state.username}
                            placeholder="Enter text"
                            onChange={this.handleChange} />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Nick Name</ControlLabel>
                        <FormControl
                            name="nickName"
                            type="text"
                            value={this.state.nickName}
                            placeholder="Enter text"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit" style={btnCus} >
                        Sign in
                    </Button>
                </form>
            </div>
        )
    }
}

Login.contextTypes = {
    router: propTypes.object.isRequired
}

Login.propTypes = {
    loginAction : propTypes.func.isRequired
}
const mapStateToProps = ( ) => {

}
export default connect(null, { loginAction }) (Login);