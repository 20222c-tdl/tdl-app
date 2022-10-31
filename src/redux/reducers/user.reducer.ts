import { Reducer } from 'redux';
import * as constants from '../constants/user.constants';

const initialState = {
    loading: false,
    data: null
}

const userReducer: Reducer = (state = {}, action) => {
    const { type, data } = action;

    switch (type) {
        case constants.USER_ON_LOGIN_REQUESTED:
        case constants.USER_ON_SIGN_UP_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case constants.USER_ON_LOGIN_SUCCEEDED:
            return {
                ...state,
                data,
                loading: false
            }

        case constants.USER_ON_LOGIN_FAILED:
        case constants.USER_ON_SIGN_UP_SUCCEEDED:
        case constants.USER_ON_SIGN_UP_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default userReducer;
