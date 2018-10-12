import React, { Component } from 'react';
import SideBar from '../components/sidebar';
import MessageList from '../components/messagelist';
import { Col, Row, Grid } from 'react-bootstrap';
import '../styles.css'

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
      <div id="container">
      <aside id="sidebar">
        <SideBar/>
        </aside>
      <section id="main">
        <section id="messages-list"><MessageList/></section>
        <section id="new-message">New message</section>
      </section>
</div>
    );
  }
}
export default HomePage;
