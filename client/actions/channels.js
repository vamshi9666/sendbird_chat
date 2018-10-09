import { sb } from './login';

export const getChannels = (obj) => {
    return disatch => {
        var openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();
        openChannelListQuery.next(function (channels, error) {
            if (error) {
                console.log(error);
                
            }
            console.log(channels);
        });

    }
}

export const createChannel = (obj) => {
    return dispatch => {

    }
}