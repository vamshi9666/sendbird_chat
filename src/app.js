import React, { Component, Fragment } from 'react';
import MessageList from './components/messages/messages';
import NavBar from './components/nav/navbar';
import Sidebar from './components/sidebar/sidebar';
import { connect } from 'react-redux'

import './styles.css'
import Loginform from './components/login/login';
export class App extends Component {
    render() {
        return (
            <Fragment>
                <nav className="nav">
                    <NavBar />
                </nav>
                <div className="whole-con">
                    <div className="sidebar-con">
                        <Sidebar  />
                    </div>
                    <div className="messages-con">
                        <MessageList  />
                    </div>
                </div>
            </Fragment>
        )
    }
}

 export class Root extends Component {
    
   
    render() {      
      return (
          <div>
              {
                 this.props.user.loggedIn ? <App/> : <Loginform submit={this.props.login} />
              }
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
export default connect(mapStateToProps,mapDispatchesToProps) (Root)

