import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import users from './users';
import cart from './cart';
import data from './data';

const reducer = combineReducers({
	users,
	cart,
	data,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
