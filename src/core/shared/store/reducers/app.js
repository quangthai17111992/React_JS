import { SET_CURRENT_LOCATION_HASH } from '../actions/app/ActionType'

const initialState = {
	currentLocationHash: false
}

export const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_CURRENT_LOCATION_HASH:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}
