import App from './app';
import Welcome from './components/welcome';
import LoginPage from './containers/loginpage';
import HomePage from './containers/home'
import React from 'react';

import { Route, IndexRoute } from 'react-router';

export default (
    <Route path="/" component={App}>
      <IndexRoute  component={Welcome}/>
      <Route path="login" component={LoginPage} />
      <Route path="home" component={HomePage}  />
    </Route>
  )
