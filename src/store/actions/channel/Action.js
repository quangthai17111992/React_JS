import { SET_CHANNEL_CURRENT } from './ActionType'

export const setChannelCurrent = (channelId) => {
	return {
		type: SET_CHANNEL_CURRENT,
		payload: {
			currentChannel: channelId
		}
	}
}
