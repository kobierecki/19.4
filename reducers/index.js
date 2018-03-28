import {combineReducers} from 'redux';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
	commentsStore: commentsReducer
});