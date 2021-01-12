import { SET_CURRENT_CHANNEL, SET_PRIVATE_CHANNEL } from './ActionType';

export const setCurrentChannel = (channelId) => {
	return {
		type: SET_CURRENT_CHANNEL,
		payload: {
			currentChannel: channelId,
		},
	};
};

export const setPrivateChannel = (isPrivateChannel) => {
	return {
		type: SET_PRIVATE_CHANNEL,
		payload: {
			isPrivateChannel: isPrivateChannel,
		},
	};
};
