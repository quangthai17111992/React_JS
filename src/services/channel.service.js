import { firebase } from '../config/firebase'

const channelRef = firebase.database().ref('channel')

export const ChannelService = {
	createSingleChannel: (friendId, currentUserId) => {
		const newChannel = {
			name: null,
			detail: null,
			users: [friendId, currentUserId],
			createdBy: {
				userId: currentUserId
			},
			type: 'single'
		}

		channelRef.push(newChannel, (res) => {
			console.log(res)
		})
	},
	listChannels: () => {
		try {
			return channelRef
		} catch (err) {
			console.log(err)
		}

		return []
	}
}
