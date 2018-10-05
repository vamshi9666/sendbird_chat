import { createStore, combineReducers, applyMiddleware } from 'redux';
import userReducer from './user';
import messageReducer from './message'
import thunk from 'redux-thunk';



const store = createStore(
    combineReducers({
        user: userReducer,
        message: messageReducer
    }),
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;