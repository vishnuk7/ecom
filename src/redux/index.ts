import { configureStore, Store } from '@reduxjs/toolkit';
import users from './users';
import cart from './cart';
import data from './data';

const reducer = {
	users,
	cart,
	data,
};

const store = configureStore({
	reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
