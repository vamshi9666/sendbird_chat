import SendBird from 'sendbird';
export const sb = new SendBird({
    appId: '5E786747-D695-4556-9C31-4D7165C1B17B'
}) 

export function loginAction (obj){    
    return dispatch => {
        console.log(obj);
        return sb.connect(obj.username)

    }
}

