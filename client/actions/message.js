export const connectChannel = channel => {
  return (dispatch, getState) => {
    channel.enter((response, error) => {
      if (error) {
        console.log(error);
      }
      const messageListQuery = channel.createPreviousMessageListQuery();
      messageListQuery.load(30, true, function(messageList, error) {
        if (error) {
          console.log(error);
          return;
        }
        dispatch({
          type: 'CONNECT_CHANNEL',
          activeChannel: channel,
          messages: messageList,
        });
      });
    });
  };
};

export const messagesInit = channel => {
  return (dispatch, getState) => {
    const messageListQuery = channel.createPreviousMessageListQuery();
      messageListQuery.load(30, true, function(messageList, error) {
        if (error) {
          console.log(error);
          return;
        }
        dispatch({
          type: 'CONNECT_CHANNEL',
          activeChannel: channel,
          messages: messageList,
        });
      });
  };
};

export const sendMessage = message => {
  return (dispatch, getState) => {
    const channel = getState().message.activeChannel;
    channel.sendUserMessage(message, null, null, function(message, error) {
      if (error) {
        console.log(error);
        return;
      }
      const messageListQuery = channel.createPreviousMessageListQuery();
      messageListQuery.load(30, true, function(messageList, error) {
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
