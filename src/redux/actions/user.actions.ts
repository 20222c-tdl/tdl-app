import {AnyAction} from 'redux';
import { IClaimFormData } from 'views/Claims/types';
import { ILoginFormData } from '../../views/Login/types';
import { ISignupUserFormData } from '../../views/SignupUser/types';
import * as constants from '../constants/user.constants';

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

