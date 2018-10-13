const defaultState = {
    messages: [],
    participants: [],
    activeChannel: null
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case "SEND_MESSAGE":
            return {
                ...state,
                messages: action.messages
            }
        case "EDIT_MESSAGE":
            return {
                ...state,
                messages: action.messages
            }
        case "DELETE_MESSAGE":
            return {
                ...state,
                messages: action.messages
            }
        case "CONNECT_CHANNEL":
            return {
                ...state,
                activeChannel: action.activeChannel,
                messages:action.messages
            }
        case "DISCONNECT_CHANNEL":
            return {
                ...state, 
                messages : null,
                activeChannel: null
            }
        default :
         return {
             ...state
         }
    }
}