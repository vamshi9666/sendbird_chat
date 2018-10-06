import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch , Route } from 'react-router-dom'
import Root, { App } from './app';
import { Provider } from 'react-redux'
import store from './reducers/index';
import routes from './routes';
import Loginform from './components/login/login';
class Main extends Component {
  

  render() {
    return (
        <Switch>
          <Route exact path="/" component={Root}>{ this.props.children}</Route>
          <Route path="/login" component={Loginform} >{this.props.children}</Route> 
             
        </Switch>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main/>
    </HashRouter>
  </Provider>
  ,
  document.getElementById('root'),
);