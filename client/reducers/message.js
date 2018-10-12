const defaultState = {
    messages:[],
    participants:[]
}

export default function( state= defaultState, action ){
    switch (action.type){
        case "SEND_MESSAGE":
                state.messages=action.messages
        case "EDIT_MESSAGE":
                state.messages =  action.messages
        case "DELETE_MESSAGE":
                state.messages=action.messgaes
    }
    return state;
}