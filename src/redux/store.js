import RootReducer from './reducers'
import thunk from 'redux-thunk'
import {  
	createStore, 
	applyMiddleware,
	compose
} from 'redux'
export  const store = createStore(
    RootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      
    )
 
)
