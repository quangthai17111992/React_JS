import { CHECK_AUTH_STAGE_CHANGED, LOG_OUT, LOG_IN } from './ActionType'

const updateUserState = (user, isBusy = false) => {
	let isAuthenticated = false
	let email = null
	let displayName = null

	if (user) {
		isAuthenticated = true
		email = user.email
		displayName = user.displayName
	}

	return {
		isAuthenticated,
		email,
		isBusy,
		displayName
	}
}

export const checkAuthStageChanged = (user) => {
	const { isAuthenticated, email, isBusy, displayName } = updateUserState(user)

	return {
		type: CHECK_AUTH_STAGE_CHANGED,
		payload: {
			isAuthenticated,
			email,
			isBusy,
			displayName
		}
	}
}

export const login = (user) => {
	const { isAuthenticated, email, isBusy, displayName } = updateUserState(
		user,
		true
	)

	return {
		type: LOG_IN,
		payload: {
			isAuthenticated,
			email,
			isBusy,
			displayName
		}
	}
}

export const logout = () => {
	return {
		type: LOG_OUT,
		payload: {
			isAuthenticated: false
		}
	}
}
