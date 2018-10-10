import React, { Component } from 'react';
import SideBar from '../components/sidebar';
import MessageList from '../components/messagelist';
import { Col, Row, Grid } from 'react-bootstrap';

const rowStyle = {
  'display':'flex',
  'flexDirection':'row'
}

const sectionStyles = {
  'marginLeft':'20px',
  'marginRight':'20px'
}

class HomePage extends Component {
  render() {
    return (
      <Grid>
        <Row style={rowStyle}>
          <Col style={sectionStyles} xs={2} md={2}>
            <SideBar/>
          </Col>
          <Col style={sectionStyles} xs={10} md={10}>
            <MessageList/>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default HomePage;
