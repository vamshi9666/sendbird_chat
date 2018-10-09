import React, {Component} from 'react';
import SideBar from '../components/sidebar';
import MessageList from '../components/messagelist';

class HomePage extends Component {
  render() {
    return (
      <div className="main">
        <div className="rooms-list">
          <SideBar />
        </div>
        <div>
          <MessageList className="message-list" />
        </div>
      </div>
    );
  }
}
export default HomePage;
