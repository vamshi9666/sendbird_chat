import React, { Component } from 'react';
import App from './app';
import loginForm from './components/login/login'

import { Route } from 'react-router'



export default (
    <div>
        <Route path="login" component={loginForm} />
        <Route path="/" component={App}  />
    </div>

)