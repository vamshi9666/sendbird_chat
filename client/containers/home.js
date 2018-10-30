import React, { Component } from 'react';
import OpenChannelList from '../components/openchannel';
import MessageList from '../components/messagelist';
import { TabContent, Row, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'
import MessagePage from './messagepage';
import MessageForm from '../components/messageform';
import '../styles.css'

const rowStyle = {
  'display': 'flex',
  'flexDirection': 'row'
}

const sectionStyles = {
  'marginLeft': '20px',
  'marginRight': '20px'
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1'
    }
    this.toggleTab = this.toggleTab.bind(this)
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div id="container">
        <aside id="sidebar">
          <Row>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggleTab('1'); }}
                >
                  Open Channels
            </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggleTab('2'); }}
                >
                  Group Channels
              </NavLink>
              </NavItem>
            </Nav>
          </Row>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" >
              <OpenChannelList className="sidebar" />
            </TabPane>
            <TabPane tabId="1" >

            </TabPane>
          </TabContent>

        </aside>
        <section id="main">
          <section id="messages-list"><MessagePage /></section>
          <section id="new-message"><MessageForm /></section>
        </section>
      </div>
    );
  }
}
export default HomePage;
