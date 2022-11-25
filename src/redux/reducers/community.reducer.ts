import { Reducer } from 'redux';
import * as constants from '../constants/community.constants';

const initialState = {
    loading: false,
    data: null,
    communityInfo: null,
    allCommunities: null,
}

const communityReducer: Reducer = (state = {}, action) => {
    const { type, data } = action;

    switch (type) {
        case constants.COMMUNITY_ON_SIGN_UP_REQUESTED:
        case constants.COMMUNITY_ON_LOGIN_REQUESTED:
        case constants.ON_GET_ALL_COMMUNITIES_REQUESTED:
        case constants.ON_GET_COMMUNITY_PROFILE_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case constants.ON_GET_COMMUNITY_PROFILE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                communityInfo: data.data
            }
        case constants.ON_GET_ALL_COMMUNITIES_SUCCEEDED:
            return {
                ...state,
                loading: false,
                allCommunities: data
            }
        case constants.COMMUNITY_ON_LOGIN_SUCCEEDED:
        case constants.COMMUNITY_ON_SIGN_UP_SUCCEEDED:
        case constants.COMMUNITY_ON_SIGN_UP_FAILED:
        case constants.COMMUNITY_ON_LOGIN_FAILED:
        case constants.ON_GET_ALL_COMMUNITIES_FAILED:
        case constants.ON_GET_COMMUNITY_PROFILE_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default communityReducer;
