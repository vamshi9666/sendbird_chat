import SendBird from 'sendbird';
const defaultState = {
	user:{}
}
export const sb = new SendBird({
    appId: '5E786747-D695-4556-9C31-4D7165C1B17B'
}) 


export default function (state= defaultState , action){
	switch (action.type){
		case 'LOGIN': 
				sb.connect(action.username, (user, error)=> {
					console.log(user);
					state.user=  user
				});
				return state;
		case 'LOGOUT':
				state.user = { };
				return state;
		default:
			return {
				state 
			}
	}
   return state;
}
