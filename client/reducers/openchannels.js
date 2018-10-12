const defaultState = {
    channels : [ ],
    loading:false,
    activeChannel: null
}

export  default function (state = defaultState, action ){
    switch (actio.type){
        case "ADD_CHANNEL":
            return {
                ...state,
                channels:action.payload
            }
        case "ENTER_CHANNEL":
            return {
                ...state,
                activeChannel:action.payload
            }
        case "EXIT_CHANNEL":
            return {
                ...state,
                activeChannel:null
            }
        case "DELETE_CHANNEL":
            return {
                ...state,
                channels:action.payload
            }
        case "SEND_MESSAGE":
            return {

            }
    }
}