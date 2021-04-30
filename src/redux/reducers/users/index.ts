import produce from 'immer';
import * as actionTypes from '../../actions/actionTypes';

const INITIAL_STATE = {
	currentUser: null,
};

export const userReducer = produce((draft, action) => {
	switch (action.type) {
		case actionTypes.SET_CURRENT_USER:
			draft.currentUser = action.payload;
	}
}, INITIAL_STATE);
