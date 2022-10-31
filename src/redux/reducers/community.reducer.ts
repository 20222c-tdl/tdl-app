import { Reducer } from 'redux';
import * as constants from '../constants/community.constants';

const initialState = {
    loading: false,
    data: null
}

const communityReducer: Reducer = (state = {}, action) => {
    const { type, data } = action;

    switch (type) {
        case constants.COMMUNITY_ON_SIGN_UP_REQUESTED:
        case constants.COMMUNITY_ON_LOGIN_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case constants.COMMUNITY_ON_LOGIN_SUCCEEDED:
            return {
                ...state,
                loading: false,
                data
            }

        case constants.COMMUNITY_ON_SIGN_UP_SUCCEEDED:
        case constants.COMMUNITY_ON_SIGN_UP_FAILED:
        case constants.COMMUNITY_ON_LOGIN_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default communityReducer;
