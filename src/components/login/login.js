import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { browserHistory } from 'react-router';
import './styles.css';

export default class Loginform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form_value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.submit(this.state.form_value);
        
          
    }

    handleChange(event) {
        this.setState({ form_value: event.target.value });
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