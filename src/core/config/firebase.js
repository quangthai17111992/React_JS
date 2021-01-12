import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const firebaseConfig = {
	apiKey: 'AIzaSyBFiM_Fz40ZrOw6TgDh8jlGonwn9RiJ1qY',
	authDomain: 'itvn-chat-app.firebaseapp.com',
	databaseURL: 'https://itvn-chat-app-default-rtdb.firebaseio.com',
	projectId: 'itvn-chat-app',
	storageBucket: 'itvn-chat-app.appspot.com',
	messagingSenderId: '309902149547',
	appId: '1:309902149547:web:a6c93eba5ab55bda7f34ee',
	measurementId: 'G-ZGFXQ2RQ8P'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()
firebase.auth()

export { firebase, firebaseConfig }
