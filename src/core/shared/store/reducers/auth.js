import {
	CHECK_AUTH_STAGE_CHANGED,
	SIGNUP,
	SIGNIN,
	SIGNOUT,
} from '../actions/auth/ActionType';

const initialState = {
	isAuthenticated: false,
	currentUser: null,
};

export const AuthReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHECK_AUTH_STAGE_CHANGED:
			return {
				...state,
				...action.payload,
			};

		case SIGNOUT:
			return action.payload;

		case SIGNIN:
			return {
				...state,
				...action.payload,
			};

		case SIGNUP:
			return action.payload;
		default:
			return state;
	}
};
