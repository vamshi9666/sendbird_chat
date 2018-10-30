import React, {Component} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {sbLogin} from '../redux/actions/login';
import {Button, Form, FormGroup, Label, Input, Container} from 'reactstrap';

class SignInContainer extends Component {
  constructor(props){
    super(props)
    this.state ={
      userId: ''
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      userId: e.target.value,
    });
  };
  login = e => {
    e.preventDefault();
    this.props.sbLogin(this.state.userId);
    this.context.router.history.push('/home');
  };
  render() {
    return (
        <Form onSubmit={this.login}>
          <FormGroup>
            <Label> User Id</Label>
            <Input
              type="text"
              placeholder="Enter your User ID"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Container className="signin-btn-conp">
            <Button type="submit"> Signin</Button>
          </Container>
        </Form>
      
    );
  }
}
SignInContainer.contextTypes = {
  router: propTypes.object.isRequired,
};
export default connect(null, {sbLogin})(SignInContainer)
