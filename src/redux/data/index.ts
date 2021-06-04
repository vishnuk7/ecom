import { combineReducers } from '@reduxjs/toolkit';
import directory from './directory';
import collection from './collection';

export default combineReducers({
	directory,
	collection,
});
