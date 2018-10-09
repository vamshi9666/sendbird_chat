import React , { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/'
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
)
// server side auth 
// if (localStorage.jwtToken) {
//     setAuthorizationToken(localStorage.jwtToken);
//     store.dispatch(signUpAction(jwtDecode(localStorage.jwtToken)));
//   }
render(
    <Provider store={store} >
        <Router history={browserHistory} routes={routes} />
    </Provider>
    
, document.getElementById('root'))
