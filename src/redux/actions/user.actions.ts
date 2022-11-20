import {AnyAction} from 'redux';
import { IClaimFormData } from 'views/Claims/types';
import { ILoginFormData } from '../../views/Login/types';
import { ISignupUserFormData } from '../../views/SignupUser/types';
import * as constants from '../constants/user.constants';

// userOnInitialize
export function userOnInitializeRequested(): AnyAction {
    return{
        type: constants.USER_ON_INITIALIZE_REQUESTED,
    };
}

export function userOnInitializeSucceeded(data: unknown): AnyAction {
    return{
        type: constants.USER_ON_INITIALIZE_SUCCEEDED,
        data
    };
}

export function userOnInitializeFailed(error: unknown): AnyAction {
    return{
        type: constants.USER_ON_INITIALIZE_FAILED,
        error
    };
}

// onLogin
export function onLoginUserRequested(formData: ILoginFormData): AnyAction {
    return{
        type: constants.USER_ON_LOGIN_REQUESTED,
        formData
    };
}

export function onLoginUserSucceeded(data: unknown): AnyAction {
    return{
        type: constants.USER_ON_LOGIN_SUCCEEDED,
        data
    };
}

export function onLoginUserFailed(error: unknown): AnyAction {
    return{
        type: constants.USER_ON_LOGIN_FAILED,
        error
    };
}

// onSignup
export function onSignupUserRequested(formData: ISignupUserFormData): AnyAction {
    return {
        type: constants.USER_ON_SIGN_UP_REQUESTED,
        formData
    };
}

export function onSignupUserSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_SIGN_UP_SUCCEEDED,
        data
    };
}

export function onSignupUserFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_SIGN_UP_FAILED,
        error
    };
}

// onRegisterAClaim
export function onRegisterAClaimRequested(formData: IClaimFormData): AnyAction {
    return {
        type: constants.USER_ON_REGISTER_A_CLAIM_REQUESTED,
        formData
    };
}

export function onRegisterAClaimSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_REGISTER_A_CLAIM_SUCCEEDED,
        data
    };
}

export function onRegisterAClaimFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_REGISTER_A_CLAIM_FAILED,
        error
    };
}

// onUserGetClaims
export function onUserGetClaimsRequested(userId: string): AnyAction {
    return {
        type: constants.USER_ON_GET_CLAIMS_REQUESTED,
        userId
    };
}

export function onUserGetClaimsSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_CLAIMS_SUCCEEDED,
        data
    };
}

export function onUserGetClaimsFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_GET_CLAIMS_FAILED,
        error
    };
}

// onEditClaim
export function onEditClaimRequested(formData: IClaimFormData): AnyAction {
    return {
        type: constants.USER_ON_EDIT_CLAIM_REQUESTED,
        formData
    };
}

export function onEditClaimSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_EDIT_CLAIM_SUCCEEDED,
        data
    };
}

export function onEditClaimFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_EDIT_CLAIM_FAILED,
        error
    };
}

// onMakeReservation
export function onMakeReservationRequested(data: any): AnyAction {
    return {
        type: constants.USER_ON_MAKE_RESERVATION_REQUESTED,
        data
    };
}

export function onMakeReservationSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_MAKE_RESERVATION_SUCCEEDED,
        data
    };
}

export function onMakeReservationFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_MAKE_RESERVATION_FAILED,
        error
    };
}

// onPostComment
export function onPostCommentRequested(data: any): AnyAction {
    return {
        type: constants.USER_ON_POST_COMMENT_REQUESTED,
        data
    };
}

export function onPostCommentSucceeded(data: unknown): AnyAction {
    return {
        type: constants.USER_ON_POST_COMMENT_SUCCEEDED,
        data
    };
}

export function onPostCommentFailed(error: unknown): AnyAction {
    return {
        type: constants.USER_ON_POST_COMMENT_FAILED,
        error
    };
}