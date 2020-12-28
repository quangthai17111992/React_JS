import { SET_CHANNEL_CURRENT } from '../actions/channel/ActionType'

const initialState = {
	channel: [],
	currentChannel: null
}

export const ChannelReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LIST_CHANNEL':
			return action.payload
		case SET_CHANNEL_CURRENT:
			return action.payload
		default:
			return state
	}
}
