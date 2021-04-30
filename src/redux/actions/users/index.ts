import * as actionTypes from '../actionTypes';

export const setCurrentUser = (user: { id: string }) => ({
	type: actionTypes.SET_CURRENT_USER,
	payload: user,
});
