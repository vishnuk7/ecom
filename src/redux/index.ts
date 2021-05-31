import { configureStore, Store } from '@reduxjs/toolkit';
import users from './users';
import cart from './cart';

const reducer = {
	users,
	cart,
};

const store = configureStore({
	reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
