import { firebase } from '../../config/firebase'

const recentChatRef = firebase.database().ref('recentChat')

export const RecentChatService = {
	createRecentChat: (currentUser, channelId, user) => {
		return recentChatRef.child(currentUser).child(channelId).set(user)
	},
	listMessageBychannel: (channelId) => {
		return recentChatRef.child(channelId)
	}
}
