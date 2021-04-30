import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';

import rootReducers from './reducers';

const middlewares = [logger];

const store = createStore(
	rootReducers,
	compose(
		applyMiddleware(...middlewares),
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
