import SendBird from 'sendbird'
export const connectChannel = channel => {
  return (dispatch, getState) => {
    var prevMessageListQuery = channel.createPreviousMessageListQuery();
    prevMessageListQuery.limit = 30;
    prevMessageListQuery.reverse = true;
    prevMessageListQuery.load(function (messages, error) {
      if (error) {
        return;
      }
      console.log(messages);
      dispatch({
        type: "CONNECT_CHANNEL",
        activeChannel: channel,
        messages: messages
      })
    });
  };
};

export const getChannels = (obj) => {
  return (dispatch, getState) => {
    const sb = SendBird.getInstance();
    var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
    channelListQuery.includeEmpty = true;
    channelListQuery.limit = 20; // pagination limit could be set up to 10
    if (channelListQuery.hasNext) {
      channelListQuery.next(function (channelList, error) {
        if (error) {
          return;
        }
        dispatch({
          type: "ADD_CHANNELS",
          channels: channelList
        })
      });
    }
  }
}

export const sendMessage = message => {
  return (dispatch, getState) => {
    const channel = getState().app.activeChannel;
    channel.sendUserMessage(message, null, null, function (message, error) {
      if (error) {
        console.log(error);
        return;
      }
      const messageListQuery = channel.createPreviousMessageListQuery();
      messageListQuery.load(30, true, function (messageList, error) {
        if (error) {
          return;
        }
        if (messageList) {
          dispatch({
            type: 'SEND_MESSAGE',
            messages: messageList,
          });
        }
      });
    });
  };
};

export const createChannel = (friendId) => {
  return (dispatch, getState) => {
    const ids = [friendId]
    const sb = SendBird.getInstance();
    sb.GroupChannel.createChannelWithUserIds(ids, false, function (groupChannel, error) {
      if (error) {
        return;
      }
      var channelListQuery = sb.GroupChannel.createMyGroupChannelListQuery();
      channelListQuery.includeEmpty = true;
      channelListQuery.limit = 20; // pagination limit could be set up to 100
      if (channelListQuery.hasNext) {
        channelListQuery.next(function (channelList, error) {
          if (error) {
            return;
          }
          dispatch({
            type: "ADD_CHANNELS",
            channels: channelList
          })
        });
      }
    });

  }

}