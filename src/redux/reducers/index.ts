import { combineReducers } from 'redux';
import communityReducer from './community.reducer';
import providersReducer from './providers.reducer';
import userReducer from './user.reducer';
import { claimsReducer } from "./claims.reducer";
import placesReducer from './places.reducer';


const rootReducer = combineReducers({
    user: userReducer,
    community: communityReducer,
    providers: providersReducer,
    claims: claimsReducer,
    places: placesReducer,
})

export default rootReducer;
