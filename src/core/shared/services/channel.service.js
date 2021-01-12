import md5 from 'md5'

import { firebase } from 'src/core/config/firebase'

const channelRef = firebase.database().ref('channel')

export const ChannelService = {
	createChannel: (group, currentUser) => {
		if (!group.photo) {
			group.photo = `http://gravatar.com/avatar/${md5(
				group.groupName
			)}?d=identicon`
		}

		const newChannel = {
			name: group.groupName,
			detail: group.description,
			tagline: group.tagline,
			photo: group.photo,
			public: group.public,
			users: [],
			createdBy: {
				avatar: currentUser.photoURL,
				uid: currentUser.uid,
				name: currentUser.displayName
			}
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
