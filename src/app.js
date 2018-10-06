import React, { Component, Fragment } from 'react';
import MessageList from './components/messages/messages';
import NavBar from './components/nav/navbar';
import Sidebar from './components/sidebar/sidebar';
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

import './styles.css'
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

  class Root extends Component {
    
   
    render() {      
      return (
          <div>
              {
                 this.props.user.loggedIn ? <App/> :<Redirect to="/login" />
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

