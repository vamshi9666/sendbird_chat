import SendBird from 'sendbird';
const defaultState = {
	user: {},
	isAuthenticated: false,
	sb: {}
};
export const sb = new SendBird({
	appId: '5E786747-D695-4556-9C31-4D7165C1B17B'
})


export default function (state = defaultState, action) {
	switch (action.type) {
		case 'LOGIN':
			sb.connect(action.username, (user, error) => {
				console.log(user);
				state.user = user;
				state.isAuthenticated = true
			});
			state.sb = sb
			break;
		case 'LOGOUT':
			state.user = null;
			state.sb = null;
			state.isAuthenticated = false
			break;
	}
	return state;
}
