const initialState ={
    user: {},
    sbInstance: null,
};

export default function(state=initialState, action){
    switch (action.type){
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                sbInstance: action.sb
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
                sbInstance: null
            }
        default :
            return {
                ...state
            }
    }
}
