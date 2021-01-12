import md5 from 'md5'
import { firebase } from 'src/core/config/firebase'

const userRef = firebase.database().ref('users')

export const AuthService = {
	userRef,
	singup: (
		firstName,
		lastName,
		jobTitle,
		phone,
		address,
		email,
		password,
		confirm_password
	) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((createdUser) => {
				const userID = createdUser.user.uid
				const displayName = `${firstName} ${lastName}`
				const avatar = `http://gravatar.com/avatar/${md5(
					displayName
				)}?d=identicon`

				createdUser.user
					.updateProfile({
						displayName: displayName,
						photoURL: avatar
					})
					.then(() => {
						AuthService.createUser(
							userID,
							displayName,
							avatar,
							firstName,
							lastName,
							jobTitle,
							phone,
							address,
							confirm_password
						)
					})
					.catch((error) => {
						// An error happened.
					})
			})
			.catch((err) => {
				console.error(err)
			})
	},
	signin: async (email, password) => {
		try {
			return await firebase.auth().signInWithEmailAndPassword(email, password)
		} catch (err) {
			console.log(err)
		}

		return null
	},
	onAuthStateChanged: (callback) => {
		return firebase.auth().onAuthStateChanged(callback)
	},
	listUsers: (currentUser) => {
		return new Promise((resolve) => {
			userRef.on('value', (snapshots) => {
				const users = []
				snapshots.forEach((snapshot) => {
					if (snapshot.key !== currentUser.uid) {
						users.push({ ...snapshot.val(), id: snapshot.key })
					}
				})

				resolve(users)
			})
		})
	},
	createUser: (userId, displayName, avatar) => {
		userRef.child(userId).set({
			name: displayName,
			avatar
		})
	},
	currentUser: () => {
		return firebase.auth().currentUser
	},
	getUser: async (userId) => {
		try {
			return await userRef.child(userId).once('value')
		} catch (err) {
			console.log(err)
		}

		return null
	}
}
