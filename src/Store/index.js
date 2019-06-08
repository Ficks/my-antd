import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import rootReducers from './Reducers';

const loggerMiddleware = createLogger({ collapsed: true })
var store = createStore(rootReducers, composeWithDevTools());

export default store;