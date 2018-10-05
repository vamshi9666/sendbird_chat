
import sendbird from 'sendbird';


const sb = new sendbird({'appId':'5E786747-D695-4556-9C31-4D7165C1B17B'})
const initialState = {
    user:{},
    loggedIn: false
}

export default function (state= initialState, action){
    switch (action.type){
        case 'ADD_USER':
            const userID  = action.payload;
            sb.connect(userID, (user, error)=> {
                if(error){
                    throw(error);
                    console.log(error);
                }
                state.user = user;
                state.loggedIn = true;
                console.log(`loggin successfull`);
            })
            return state
            break;
        case 'GET_USER':
            [...state.user];
            break;
    }
    console.log(state)
    return state;
}