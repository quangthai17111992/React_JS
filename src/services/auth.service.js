import { firebase } from '../config/firebase'

const userRef = firebase.database().ref('users')

export const AuthService = {
	singup: (email, password, firstName, lastName) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((createdUser) => {
				const userID = createdUser.user.uid
				const displayName = `${firstName} ${lastName}`
				const avatar = `http://gravatar.com/avatar/${firstName} ${lastName}?d=identicon`

				createdUser.user
					.updateProfile({
						displayName: displayName,
						photoURL: avatar
					})
					.then(() => {
						AuthService.createUser(userID, displayName, avatar)
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
	listUsers: async () => {
		try {
			return await userRef.once('value')
		} catch (err) {
			console.log(err)
		}

		return []
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

// let user = null;

// firebase
// 	.auth()
// 	.signInWithEmailAndPassword(email, password)
//   .then(async ({ user }) => {
//     user= user
// 		window.localStorage.setItem('token', await user.getIdToken())
// 		window.localStorage.setItem('refreshToken', user.refreshToken)
// 		window.localStorage.setItem('email', user.email)
// 		window.localStorage.setItem('displayName', user.displayName)
// 		window.localStorage.setItem('expiresIn', '3600')
// 	})
// 	.catch((error) => {
// 		console.error(error)
//   })

// do ing something with user
