import React,  {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {  Icon , Dialog ,Button, Row } from '@blueprintjs/core'
import {getChannels, addChannel} from '../actions/openchannel';
/* eslint-disable */
import {
  Button
} from 'react-bootstrap';
import Channel from './channel';

/* eslint-disable */
class GroupChannelList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NAME: '',
    };
    this.addChannel = this.addChannel.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  addChannel() {
    this.props.addChannel(this.state.NAME);
    this.setState({NAME: ' '});
    this.forceUpdate();
  }

  componentDidMount() {
    this.props.getChannels();
  }
  handleChange(e) {
    this.setState({NAME: e.target.value});
  }
  render() {
    // eslint-disable-next-line     
    console.log(this.props);
    return (
      <div>
          <Row> 
              <Button>
                <Icon name="plus" />      
            </Button>        
         </Row>
        <ul>
          {this.props.openChannels.map(channel => (
            <Channel instance={channel} name={channel.name} />
          ))}
          <div>
            <input
              type="text"
              value={this.state.NAME}
              onChange={this.handleChange.bind(this)}
            />
           <Icon  icon="insert" >
            <Button className="btn "/>
           </Icon>
          </div>
        </ul>
      </div>
    );
  }
}

GroupChannelList.propTypes = {
 
};

const mapStateToProps = state => {
  return {
   };
};

export default connect(
  mapStateToProps,
  {},
)(GroupChannelList);
