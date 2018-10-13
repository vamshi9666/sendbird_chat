const defaultState = {
    channels : [ ],
    loading:false,
}

export  default function (state = defaultState, action ){
    switch (action.type) {
        case "ADD_CHANNELS":
           return {
               ...state,
               channels: action.channels
           }
        case "DELETE_CHANNEL":
           return {
               ...state,
               channels: action.channels
           }
        case "CLEAR_CHANNELS":
           return {
               ...state,
               channels: null,
               loading: false
           }
    }
    return state;
}