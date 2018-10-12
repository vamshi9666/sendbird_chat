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
			state.user = null;
			state.sbInstance = null;
			state.isAuthenticated = false;
			break;
		case "LOGIN_SUCCESS":
			state.user = action.user;
			state.sbInstance = action.sbInstance;
			state.isAuthenticated = true;
			break;
		case "LOGIN_FAIL":
			state.error = action.error;
			break;
	}
	return state;
}
