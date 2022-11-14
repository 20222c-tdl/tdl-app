import { AnyAction } from 'redux';
import { ILoginFormData } from 'views/Login/types';
import { ISignupProviderFormData } from 'views/SignupProvider/types';
import * as constants from '../constants/providers.constants';

// onLoginProvider
export function onLoginProviderRequested(formData: ILoginFormData): AnyAction {
    return {
        type: constants.PROVIDER_ON_LOGIN_REQUESTED,
        formData
    };
}

export function onLoginProviderSucceeded(data: unknown): AnyAction {
    return {
        type: constants.PROVIDER_ON_LOGIN_SUCCEEDED,
        data
    };
}

export function onLoginProviderFailed(error: unknown): AnyAction {
    return {
        type: constants.PROVIDER_ON_LOGIN_FAILED,
        error
    };
}

// onSignup
export function onSignupProviderRequested(formData: ISignupProviderFormData): AnyAction {
    return {
        type: constants.PROVIDER_ON_SIGN_UP_REQUESTED,
        formData
    };
}

export function onSignupProviderSucceeded(data: unknown): AnyAction {
    return {
        type: constants.PROVIDER_ON_SIGN_UP_SUCCEEDED,
        data
    };
}

export function onSignupProviderFailed(error: unknown): AnyAction {
    return {
        type: constants.PROVIDER_ON_SIGN_UP_FAILED,
        error
    };
}

// onGetAllProvidersCategories
export function onGetAllProvidersCategoriesRequested(): AnyAction {
    return {
        type: constants.ON_GET_ALL_CATEGORIES_REQUESTED,
    };
}

export function onGetAllProvidersCategoriesSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_ALL_CATEGORIES_SUCCEEDED,
        data
    };
}

export function onGetAllProvidersCategoriesFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_ALL_CATEGORIES_FAILED,
        error
    };
}

