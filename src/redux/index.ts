import { configureStore } from '@reduxjs/toolkit';
import users from './users';

const reducer = {
	users,
};

const store = configureStore({
	reducer,
});

export default store;
