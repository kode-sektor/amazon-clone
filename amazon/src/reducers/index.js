import authReducer from './auth.reducer';
import { combineReducers } from 'redux';

// to be exported to src/store/index.js
const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;