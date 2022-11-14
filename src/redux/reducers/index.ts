import { combineReducers } from 'redux';
import communityReducer from './community.reducer';
import providersReducer from './providers.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    community: communityReducer,
    providers: providersReducer,

})

export default rootReducer;
