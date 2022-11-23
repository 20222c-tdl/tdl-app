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

// onFilterCategory
export function onFilterCategoryRequested(category: string): AnyAction {
    return {
        type: constants.ON_FILTER_CATEGORY_REQUESTED,
        category
    };
}

export function onFilterCategorySucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_FILTER_CATEGORY_SUCCEEDED,
        data
    };
}

export function onFilterCategoryFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_FILTER_CATEGORY_FAILED,
        error
    };
}

// onGetAllProviders
export function onGetAllProvidersRequested(): AnyAction {
    return {
        type: constants.ON_GET_ALL_PROVIDERS_REQUESTED
    };
}

export function onGetAllProvidersSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_ALL_PROVIDERS_SUCCEEDED,
        data
    };
}

export function onGetAllProvidersFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_ALL_PROVIDERS_FAILED,
        error
    };
}

// onGetAllProvidersReviews
export function onGetAllProvidersReviewsRequested(providerId:string): AnyAction {
    return {
        type: constants.ON_GET_ALL_PROVIDERS_REVIEWS_REQUESTED,
        providerId
    };
}

export function onGetAllProvidersReviewsSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_ALL_PROVIDERS_REVIEWS_SUCCEEDED,
        data
    };
}

export function onGetAllProvidersReviewsFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_ALL_PROVIDERS_REVIEWS_FAILED,
        error
    };
}

// onGetProviderInfo
export function onGetProviderInfoRequested(providerId: string): AnyAction {
    return {
        type: constants.ON_GET_PROVIDER_INFO_REQUESTED,
        providerId
    };
}

export function onGetProviderInfoSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_PROVIDER_INFO_SUCCEEDED,
        data
    };
}

export function onGetProviderInfoFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_PROVIDER_INFO_FAILED,
        error
    };
}

// onGetProviderServices
export function onGetProviderServicesRequested(providerId: string): AnyAction {
    return {
        type: constants.ON_GET_PROVIDER_SERVICES_REQUESTED,
        providerId
    };
}

export function onGetProviderServicesSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_PROVIDER_SERVICES_SUCCEEDED,
        data
    };
}

export function onGetProviderServicesFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_PROVIDER_SERVICES_FAILED,
        error
    };
}