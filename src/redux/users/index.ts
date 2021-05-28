import { createSlice } from '@reduxjs/toolkit';
import { userType } from './type';

const initialState: userType = {
	currentUser: null,
};

const slice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		SET_CURRENT_USER: (state, action) => {
			state.currentUser = action.payload;
		},
	},
});

//action creators
const { SET_CURRENT_USER } = slice.actions;

export const setCurrentUser = (user: userType) => {
	return SET_CURRENT_USER(user);
};

//export reducer
export default slice.reducer;
