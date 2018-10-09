
const defaultState = {
	channels:[]
}

export default function (state= defaultState , action){
	switch (action.type){
		case 'GET':
		 	state.channels = action.channels;
 
		case 'ADD':
			state.channels.push(action.channel);
	}
	return state
} 
