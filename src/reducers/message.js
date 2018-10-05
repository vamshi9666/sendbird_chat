const initialState = {
    messages : []
}

export default function (state = initialState, action){
    switch (action.type){
        case 'ADD_MESSAGE':
            state.push(action.payload)
            break;
        case 'GET_MESSAGE':
            [...state]
            break;
    }
    return state
}