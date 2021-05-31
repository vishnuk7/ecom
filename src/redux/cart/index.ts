import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	hidden: false,
};

const slice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		toggleDropdown: (state) => {
			state.hidden = !state.hidden;
		},
	},
});

export const setToggleDropdown = () => {
	return slice.actions.toggleDropdown();
};

export default slice.reducer;
