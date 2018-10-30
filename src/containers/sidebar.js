import React , { Component }  from 'react';
import { connect } from 'react-redux'
import { Container} from 'reactstrap'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getChannels } from '../redux/actions/channel';
import Channel from '../components/channel'
import { Icon } from '@blueprintjs/core'
import { SourceMapConsumer } from 'source-map';
 class Sidebar extends Component{
    constructor(props){
        super(props)
        this.state= {
            open:false,
            friendId: ''
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    componentWillMount(){
        this.props.getChannels()
    }
    handleChange = (e)=> {
        e.preventDefault();
        this.setState({
            friendId: e.target.value
        });
    }
    createChannel =() => {
        
    }
    render(){
        return (
            <Container>
                <Button onClick={this.handleClickOpen}>New conversation</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Channel </DialogTitle>
          <DialogContent>
            <DialogContentText>
             Enter user id of your friend
            </DialogContentText>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="name"
              label=" "
              type="email"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.createChannel} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
                {this.props.channels.map(channel => {
                    return (
                        <Channel key={channel.createdAt} name={channel.name} instance={channel}  />
                    )
                })}
            </Container>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        channels: state.app.channels
    }

}

export default connect( MapStateToProps, { getChannels })(Sidebar)