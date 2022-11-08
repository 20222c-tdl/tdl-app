import { combineReducers } from 'redux';
import communityReducer from './community.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    community: communityReducer

})

export default rootReducer;
