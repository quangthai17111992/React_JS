import { firebase } from '../config/firebase'

const messageRef = firebase.database().ref('message')

export const MessageService = {
	sendMessage: (channelId, message, currentUser) => {
		const newMessage = {
			timestamp: firebase.database.ServerValue.TIMESTAMP,
			content: message,
			user: {
				id: currentUser.uid,
				name: currentUser.displayName,
				avatar: currentUser.photoURL
			}
		}

		return messageRef.child(channelId).push().set(newMessage)
	},
	listMessages: (channelId) => {
		return messageRef.child(channelId)
	}
}
