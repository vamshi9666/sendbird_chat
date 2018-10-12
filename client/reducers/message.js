const defaultState = {
    messages:[],
    participants:[]
}

export default function( state= defaultState, action ){
    switch (action.type){
        case "SEND_MESSAGE":
            return {
                ...state,
                messages:action.messages
            }
        case "EDIT_MESSAGE":
            return {
                ...state,
                messages: action.messages
            }
        case "DELETE_MESSAGE":
            return {
                ...state,
                messages:action.messgaes
            }
    }
}