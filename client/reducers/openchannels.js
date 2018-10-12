const defaultState = {
    channels : [ ],
    loading:false,
    activeChannel: null
}

export  default function (state = defaultState, action ){
    switch (action.type){
        case "ADD_CHANNEL":
              state.channels= action.payload
        case "ENTER_CHANNEL":
                state.activeChannel= action.payload
        case "EXIT_CHANNEL":
                state.activeChannel= null
        case "DELETE_CHANNEL":
                state.channels=action.payload
    }
    return state;
}