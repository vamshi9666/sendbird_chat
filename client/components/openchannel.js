import React,  {Component} from 'react';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {getChannels, addChannel} from '../actions/openchannel';
/* eslint-disable */
import {
  Button, Row
} from 'reactstrap'
import Channel from './channel';

/* eslint-disable */
class OpenChannelList extends Component {
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
 
        <h3>Open channels</h3>
        <ul>
          {this.props.openChannels.map(channel => (
            <Channel key={channel.createdAt} instance={channel} name={channel.name} />
          ))}
          <div>
            <input
              type="text"
              value={this.state.NAME}
              onChange={this.handleChange.bind(this)}
            />
            <Button className="btn" onClick={this.addChannel}>
              {' '}
              +{' '}
            </Button>
          </div>
        </ul>
      </div>
    );
  }
}

OpenChannelList.propTypes = {
  openChannels: propTypes.array.isRequired,
  addChannel: propTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    openChannels: state.openChannel.channels,
  };
};

export default connect(
  mapStateToProps,
  {getChannels, addChannel},
)(OpenChannelList);
