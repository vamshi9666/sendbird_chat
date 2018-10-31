const initialState = {
    channels: [],
    activeChannel: {},
    messages: []
}


export default function (state = initialState, action) {
    switch (action.type) {
       case "CONNECT_CHANNEL":
            return {
                ...state, 
               activeChannel: action.activeChannel,
               messages: action.messages
            }
        case "SEND_MESSAGE":
            return  {
                ...state,
                messages: action.messages
            }
        case "ADD_CHANNELS":
            return {
                ...state,
                channels: action.channels
            }
        default:
            return {
                ...state
            }
    }
}