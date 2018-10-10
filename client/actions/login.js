import SendBird from 'sendbird';
export const sb = new SendBird({
    appId: '5E786747-D695-4556-9C31-4D7165C1B17B'
}) 

export function loginAction (obj){    
    return dispatch => {
        console.log(obj);
        sb.connect(obj.username);
        dispatch({
            type:'LOGIN',
            username: obj.username
        }) 
    }
}

export function logOutAction () {    
    return dispatch => {
        dispatch({
            type:"LOGOUT"
        })
    }
}