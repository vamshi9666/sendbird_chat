
export const connectChannel = (channel) => {
    return (dispatch, getState) => {
        channel.enter((response, error) => {
            if (error) {
                console.log(error);
            }
            const messageListQuery = channel.createPreviousMessageListQuery();
            messageListQuery.load(30, true, function (messageList, error) {
                if (error) {
                    console.log(error);
                    return;
                }
                dispatch({
                    type: "CONNECT_CHANNEL",
                    activeChannel: channel,
                    messages: messageList
                });
            });
        })
    };
}

export const messagesInit = (messages) => {
    return (dispatch, getState) => {
        dispatch({
            type: "SEND_MESSAGE",
            messages: messages
        })
    }
}

export const sendMessage = (message) => {
    return (dispatch, getState) => {
        const channel = getState().message.activeChannel;
        console.log(getState().message);
        channel.sendUserMessage(message, null, null, function (message, error) {
            if (error) {
                console.log(error);
                return;
            }
            console.log(message);
                const messageListQuery = channel.createPreviousMessageListQuery();
                messageListQuery.load(30, true, function (messageList, error) {
                    if (error) {
                        return;
                    }
                    console.log(messageList);
                    if (messageList) {
                        dispatch({
                            type: "SEND_MESSAGE",
                            messages: messageList
                        })
                    }
                });
        });
    }
}