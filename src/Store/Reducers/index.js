import { combineReducers } from 'redux';
import { userInfo } from './user_reducer';

var rootReducers = combineReducers({
    userInfo
});

export default rootReducers;