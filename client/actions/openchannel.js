import SendBird from 'sendbird';


export const getChannels = (obj) => {
    return (dispatch, getState) => {
        console.log(getState().user)
        const sb = SendBird.getInstance();
        var openChannelListQuery = sb.OpenChannel.createOpenChannelListQuery();
        openChannelListQuery.next(function (channels, error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log(channels);
            
            // Returns a list of channels that have "SendBird" in their names.
            dispatch({
                type:"ADD_CHANNELS",
                channels: channels
            })
        });
    }
}


export const addChannel = (obj) => {
    return (dispatch,getState) => {
        const sb = SendBird.getInstance();
        sb.OpenChannel.createChannel(obj.NAME,null,null, function(channel, error) {
            if (error) {
                console.log(error);
                return;
            }
             // onCreated
             console.log(channel);
        });
    }
}