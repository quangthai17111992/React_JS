import { firebase } from '../../config/firebase'

const messagesRef = firebase.database().ref('messages')
const privateMessagesRef = firebase.database().ref('privateMessages')

export const MessageService = {
	privateMessagesRef,
	sendMessage: (channelId, message, currentUser, isPrivateMessage = true) => {
		const ref = isPrivateMessage ? privateMessagesRef : messagesRef
		const newMessage = {
			timestamp: firebase.database.ServerValue.TIMESTAMP,
			content: message,
			user: {
				id: currentUser.uid,
				name: currentUser.displayName,
				avatar: currentUser.photoURL
			}
		}

		return ref.child(channelId).push().set(newMessage)
	},
	listMessageBychannel: (channelId, isPrivateMessage = true) => {
		const ref = isPrivateMessage ? privateMessagesRef : messagesRef
		return ref.child(channelId)
	}
}
