import { Reducer } from 'redux';
import * as constants from '../constants/user.constants';

const initialState = {
    loading: false,
    data: null,
    user: null,
    claims: null,
    changeClaimsList: false,
}

const userReducer: Reducer = (state = {}, action) => {
    const { type, data } = action;

    switch (type) {
        case constants.USER_ON_LOGIN_REQUESTED:
        case constants.USER_ON_SIGN_UP_REQUESTED:
        case constants.USER_ON_GET_CLAIMS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case constants.USER_ON_REGISTER_A_CLAIM_REQUESTED:
        case constants.USER_ON_EDIT_CLAIM_REQUESTED:
            return {
                ...state,
                loading: true,
                changeClaimsList: false,
            }
        case constants.USER_ON_LOGIN_SUCCEEDED:
            return {
                ...state,
                user: data.data,
                loading: false
            }
        case constants.USER_ON_GET_CLAIMS_SUCCEEDED:
            return {
                ...state,
                loading: true,
                claims: data.data,
            }
        case constants.USER_ON_REGISTER_A_CLAIM_SUCCEEDED:
        case constants.USER_ON_EDIT_CLAIM_SUCCEEDED:
            return {
                ...state,
                loading: true,
                changeClaimsList: true,
            }
        case constants.USER_ON_LOGIN_FAILED:
        case constants.USER_ON_SIGN_UP_SUCCEEDED:
        case constants.USER_ON_SIGN_UP_FAILED:
        case constants.USER_ON_REGISTER_A_CLAIM_SUCCEEDED:
        case constants.USER_ON_REGISTER_A_CLAIM_FAILED:
        case constants.USER_ON_GET_CLAIMS_FAILED:
        case constants.USER_ON_EDIT_CLAIM_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default userReducer;
