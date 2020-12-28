import {
	CHECK_AUTH_STAGE_CHANGED,
	LOGGED,
	LOG_IN,
	LOG_OUT
} from '../actions/auth/ActionType'

const initialState = {
	isAuthenticated: false,
	email: null,
	isBusy: false,
	displayName: null
}

export const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_AUTH_STAGE_CHANGED:
			return action.payload

		case LOG_OUT:
			return action.payload

		case LOG_IN:
			return action.payload

		case LOGGED:
			return action.payload
		default:
			return state
	}
}
