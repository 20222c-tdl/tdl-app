import { combineReducers } from 'redux';
import communityReducer from './community.reducer';
import userReducer from './user.reducer';
import { claimsReducer } from "./claims.reducer";

const rootReducer = combineReducers({
    user: userReducer,
    community: communityReducer,
    claims: claimsReducer
})

export default rootReducer;
