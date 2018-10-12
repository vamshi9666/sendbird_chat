import { store } from '..'
import { sb } from './login'
export const getChannels = (obj) => {
    console.log(`State is `+ store.getState());
    console.log(store.getState());
    

    return disatch => {
        var openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();
        openChannelListQuery.next(function (channels, error) {
            if (error) {
                console.log(error);     
            }
           channels.map(channel => {
               disatch({
                   type:"ADD",
                   channel:channel
               })
           })
        });

    }
}

export const addChannel = (obj) => {
    return dispatch => {

    }
}