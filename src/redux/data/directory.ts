import { createSlice } from '@reduxjs/toolkit';
import { sections } from './directory.data';

const initialState = sections;

const slice = createSlice({
	name: 'directory',
	initialState,
	reducers: {},
});

export default slice.reducer;
