import { Reducer } from 'redux';
import * as constants from '../constants/user.constants';

const initialState = {
    loading: false,
    data: null,
    user: null,
    claims: null,
    changeClaimsList: false,
    reservations: null,
    changeReservations: false,
    userReviews: null,
    changeReviews: false,
}

const userReducer: Reducer = (state = {}, action) => {
    const { type, data } = action;

    switch (type) {
        case constants.USER_ON_LOGIN_REQUESTED:
        case constants.USER_ON_SIGN_UP_REQUESTED:
        case constants.USER_ON_GET_CLAIMS_REQUESTED:
        case constants.USER_ON_INITIALIZE_REQUESTED:
        case constants.USER_ON_MAKE_RESERVATION_REQUESTED:
        case constants.USER_ON_POST_COMMENT_REQUESTED:
        case constants.USER_ON_GET_PROFILE_INFO_REQUESTED:
        case constants.USER_ON_GET_ALL_RESERVATIONS_REQUESTED:
        case constants.USER_ON_GET_REVIEWS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case constants.USER_ON_CANCEL_RESERVATION_REQUESTED:
        case constants.USER_ON_PAY_RESERVATION_REQUESTED:
            return {
                ...state,
                loading: true,
                changeReservations: false,
            }
        case constants.USER_ON_REGISTER_A_CLAIM_REQUESTED:
        case constants.USER_ON_EDIT_CLAIM_REQUESTED:
            return {
                ...state,
                loading: true,
                changeClaimsList: false,
            }
        case constants.USER_ON_LEAVE_A_REVIEW_REQUESTED:
            return {
                ...state,
                loading: true,
                changeReviews: false,
            }
        case constants.USER_ON_LOGIN_SUCCEEDED:
        case constants.USER_ON_GET_PROFILE_INFO_SUCCEEDED:
            return {
                ...state,
                user: data,
                loading: false
            }
        case constants.USER_ON_INITIALIZE_SUCCEEDED:
            return {
                ...state,
                user: data,
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
        case constants.USER_ON_GET_ALL_RESERVATIONS_SUCCEEDED:
            return {
                ...state,
                loading: true,
                reservations: data
            }
        case constants.USER_ON_CANCEL_RESERVATION_SUCCEEDED:
        case constants.USER_ON_PAY_RESERVATION_SUCCEEDED:
            return {
                ...state,
                loading: true,
                changeReservations: true,
            }
        case constants.USER_ON_GET_REVIEWS_SUCCEEDED:
            return {
                ...state,
                loading: true,
                userReviews: data,
            }
        case constants.USER_ON_LEAVE_A_REVIEW_SUCCEEDED:
            return {
                ...state,
                loading: true,
                changeReviews: true,
            }

        case constants.USER_ON_LOGIN_FAILED:
        case constants.USER_ON_INITIALIZE_FAILED:
        case constants.USER_ON_GET_PROFILE_INFO_FAILED:
        case constants.USER_ON_SIGN_UP_SUCCEEDED:
        case constants.USER_ON_SIGN_UP_FAILED:
        case constants.USER_ON_REGISTER_A_CLAIM_FAILED:
        case constants.USER_ON_GET_CLAIMS_FAILED:
        case constants.USER_ON_EDIT_CLAIM_FAILED:
        case constants.USER_ON_MAKE_RESERVATION_SUCCEEDED:
        case constants.USER_ON_MAKE_RESERVATION_FAILED:
        case constants.USER_ON_POST_COMMENT_SUCCEEDED:
        case constants.USER_ON_POST_COMMENT_FAILED:
        case constants.USER_ON_GET_ALL_RESERVATIONS_FAILED:
        case constants.USER_ON_CANCEL_RESERVATION_FAILED:
        case constants.USER_ON_GET_REVIEWS_FAILED:
        case constants.USER_ON_LEAVE_A_REVIEW_FAILED:
        case constants.USER_ON_PAY_RESERVATION_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default userReducer;
