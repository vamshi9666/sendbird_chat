import { combineReducers } from 'redux';
import userReducer from './user';
import messageReducer  from './message';
import openChannelReducer from './openchannels';

export default combineReducers({
    user:userReducer,
    message: messageReducer,
    openChannel : openChannelReducer
})