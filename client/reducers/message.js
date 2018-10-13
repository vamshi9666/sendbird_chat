const defaultState = {
    messages: [],
    participants: [],
    activeChannel: null
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case "SEND_MESSAGE":
            state.messages = action.messages

        case "EDIT_MESSAGE":
            state.messages = action.messages
        case "DELETE_MESSAGE":
            state.messages = action.messages
        case "CONNECT_CHANNEL":
            state.messages = action.messages,
            state.activeChannel = action.activeChannel
        case "DISCONNECT_CHANNEL":
            state.activeChannel = null,
            state.messages = null
    }
    return state
}