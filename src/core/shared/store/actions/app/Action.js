import { SET_CURRENT_LOCATION_HASH } from './ActionType';

export const setCurrentLocationHash = (hash) => {
	return {
		type: SET_CURRENT_LOCATION_HASH,
		payload: {
			currentLocationHash: hash,
		},
	};
};
