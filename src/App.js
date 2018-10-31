import React, { Component } from 'react';
import RootReducer from './redux/reducers/';
import './App.css'
import SendBird from 'sendbird';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import { BrowserRouter } from 'react-router-dom'
import Main from './containers/main';
import  {  store } from './redux/store'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Provider store={store} >
       <BrowserRouter>
         <Main/>
       </BrowserRouter>   
      </Provider>
    );
  }
}

export default App;
