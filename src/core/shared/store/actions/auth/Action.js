import { CHECK_AUTH_STAGE_CHANGED, SIGNOUT, SIGNIN, SIGNUP } from './ActionType'

const updateUserState = (user) => {
	let isAuthenticated = false
	let currentUser = null

	if (user) {
		isAuthenticated = true
		currentUser = user
	}

	return {
		isAuthenticated,
		currentUser
	}
}

export const checkAuthStageChanged = (user) => {
	const { isAuthenticated, currentUser } = updateUserState(user)

	return {
		type: CHECK_AUTH_STAGE_CHANGED,
		payload: {
			isAuthenticated,
			currentUser
		}
	}
}

export const login = (user) => {
	const { isAuthenticated, currentUser } = updateUserState(user)

	return {
		type: SIGNIN,
		payload: {
			isAuthenticated,
			currentUser
		}
	}
}

export const signup = (user) => {
	const { isAuthenticated, currentUser } = updateUserState(user)

	return {
		type: SIGNUP,
		payload: {
			isAuthenticated,
			currentUser
		}
	}
}

export const logout = () => {
	return {
		type: SIGNOUT,
		payload: {
			isAuthenticated: false
		}
	}
}
