import SendBird from 'sendbird';
const defaultState = {
	user: null,
	isAuthenticated: false,
	sbInstance: {},
	error:null
};
export const sb = new SendBird({
	appId: '5E786747-D695-4556-9C31-4D7165C1B17B'
})



export default function (state = defaultState, action) {
	switch (action.type) {
		case 'LOGOUT':
			return {
				...state,
				user: null,
				sbInstance: null,
				isAuthenticated: false
			}
		case "LOGIN_SUCCESS":
			return {
				...state,
				user: action.user,
				sbInstance: action.sbInstance,
				isAuthenticated: true
			}
		case "LOGIN_FAIL":
			return {
				...state,
				error: action.error
			}
		default :
			return  {
				...state
			}
	}
}
