const defaultState = {
    channels : [ ],
    loading:false,
}

export  default function (state = defaultState, action ){
    switch (action.type) {
        case "ADD_CHANNELS":
            state.channels = action.channels;
            break;
        case "DELETE_CHANNEL":
            state.channels = action.payload
            break;
        case "CLEAR_CHANNELS":
            state.channels = [];
            break;
    }
    return state;
}