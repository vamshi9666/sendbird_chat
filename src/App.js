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
const store = createStore(
    RootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      
    )
 
)

export const sb = new SendBird({
  appId: '5E786747-D695-4556-9C31-4D7165C1B17B'
})

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
