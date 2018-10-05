import React, { Component }from 'react';
import ReactDOM from 'react-dom';
import {  Router,browserHistory   } from 'react-router';
import Root from './app';
import { Provider } from 'react-redux'
import store from './reducers/index';
import routes from './routes';
class Main extends Component {
  render(){
    return (
      <Root/>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Main/>
  </Provider>
  ,
  document.getElementById('root'),
);