import { createSlice } from '@reduxjs/toolkit';
import { SHOP_DATA } from './collection.data';

const initialState = SHOP_DATA;

const slice = createSlice({
	name: 'collection',
	initialState,
	reducers: {},
});

export default slice.reducer;
