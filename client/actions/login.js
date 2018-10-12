import SendBird from 'sendbird';
 
const sb = new SendBird({'appId': '5E786747-D695-4556-9C31-4D7165C1B17B'});

const sbConnect = (userId, nickName) => {
    return new Promise((resolve, reject) => {
        sb.connect(userId, (user,error)=> {
            if(error){
                console.log(error);
                reject(error);
            }
            else{
                resolve(user);
            }
        })
    })
}
export const sbLogin = ({ userId, nickname }) => {
    return (dispatch) => {  
       sb.connect(userId, (user, error) => {
           if(error){
               console.log(error);
           }
           dispatch({
               type:"LOGIN_SUCCESS",
               user: user,
               sb:sb
           })
       })
    }
}

export const sbLogout = (dispatch) => {
    return dispatch => {
       dispatch({
           type:"LOGOUT"
       })
    } 
}

const loginFail = (dispatch, error) => {
    dispatch({ 
        type: "LOGIN_FAIL",
        error: error
    });
}

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: "LOGIN_SUCCESS", 
        user: user 
    });
}