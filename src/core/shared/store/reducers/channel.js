import {
	SET_CURRENT_CHANNEL,
	SET_PRIVATE_CHANNEL,
} from '../actions/channel/ActionType';

const initialState = {
	channel: [],
	currentChannel: null,
	isPrivateChannel: false,
};

export const ChannelReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LIST_CHANNEL':
			return action.payload;
		case SET_CURRENT_CHANNEL:
			return {
				...state,
				currentChannel: action.payload.currentChannel,
			};
		case SET_PRIVATE_CHANNEL:
			return {
				...state,
				isPrivateChannel: action.payload.isPrivateChannel,
			};
		default:
			return state;
	}
};
