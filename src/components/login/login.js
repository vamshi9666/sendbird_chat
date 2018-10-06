import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router';
import './styles.css';

  class Loginform extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            form_value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.login(this.state.form_value);
        this.context.router.history.push('/')       

        
    }

    handleChange(e) {
        this.setState({ form_value: e.target.value });
    };
    render() {
        
        
        return (
            <div className="login-form">
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <div className="sub-con">
                            <Label for="exampleEmail">Email</Label>
                        </div>

                        <Input type="text" value={this.state.form_value} onChange={this.handleChange} placeholder="User Name" />
                    </FormGroup>
                    <div className="sub-con">
                        <Button onClick={this.onSubmit}>Sign In</Button>
                    </div>
                </Form>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        message: state.message,
        user: state.user
    }
}

const mapDispatchesToProps  = (dispatch) => {
    return {
        login: (user) => {
            dispatch({
                type:"ADD_USER",
                payload:user
            })
            
        }
    }

}
Loginform.contextTypes = {
    router: PropTypes.object.isRequired
  }

export default connect(mapStateToProps,mapDispatchesToProps) (Loginform)

