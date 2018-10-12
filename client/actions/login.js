import SendBird from 'sendbird';
 

export const sbLogin = (userId, name) => {
    return new Promise((resolve, reject) => {
        const sb = SendBird({
            appId: '5E786747-D695-4556-9C31-4D7165C1B17B'
        })
        sb.connect(userId, (user, error)=> {
            if(error){
                reject(`sendbird connecting error`)
            }
          resolve(user,sb);
        })
    })
}

export const sbLogout = (dispatch) => {
    return dispatch => {
       dispatch({
           type:"LOGOUT"
       })
    } 
}