import { firebase } from 'src/core/config/firebase'

const connectedRef = firebase.database().ref('.info/connected')
const presenceRef = firebase.database().ref('presence')

export const ConnectedService = {
	connectedRef,
	presenceRef,
	listenToUserConnected: (currentUser) => {
		return new Promise(() => {})
	},
	getUserConnect: (currentUser, eventListener) => {
		return new Promise((resolve) => {
			presenceRef.on(eventListener, (snap) => {
				if (currentUser.uid !== snap.key) {
					return resolve(snap.key)
				}

				return resolve(null)
			})

			return resolve(null)
		})
	}
}
