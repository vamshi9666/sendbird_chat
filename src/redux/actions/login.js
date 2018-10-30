import SendBird from 'sendbird';

const sb = new SendBird({appId: '5E786747-D695-4556-9C31-4D7165C1B17B'});


export const sbLogin = (userId) => {
  
  return dispatch => {
    sb.connect(
      userId,
      (user, error) => {
        if (error) {
          console.log(error);
        }
        dispatch({
          type: 'LOGIN',
          payload: user,
          sb:sb
        });
      },
    );
  };
};

export const sbLogout = dispatch => {

    dispatch({
      type: 'LOGOUT'
    });
};
