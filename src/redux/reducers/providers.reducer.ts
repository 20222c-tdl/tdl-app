import { Reducer } from 'redux';
import * as constants from '../constants/providers.constants';

const initialState = {
    loading: false,
    data: null,
    providerData: null,
    allCategories: null,
    providers: null,
    allProviders: null,
    providerServices: null,
    providerReviews: null,
    getProfile: false,
    changeServices: false,
}

const providersReducer: Reducer = (state = {}, action) => {
    const { type, data } = action;

    switch (type) {
        case constants.ON_GET_ALL_CATEGORIES_REQUESTED:
        case constants.PROVIDER_ON_SIGN_UP_REQUESTED:
        case constants.ON_FILTER_CATEGORY_REQUESTED:
        case constants.ON_GET_ALL_PROVIDERS_REQUESTED:
        case constants.ON_GET_PROVIDER_INFO_REQUESTED:
        case constants.ON_GET_PROVIDER_SERVICES_REQUESTED:
        case constants.ON_GET_ALL_PROVIDERS_REVIEWS_REQUESTED:
        case constants.PROVIDER_ON_SEARCH_NAME_REQUESTED:
        case constants.PROVIDER_ON_GET_PROFILE_INFO_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case constants.PROVIDER_ON_LOGIN_REQUESTED:
            return {
                ...state,
                loading: false,
                getProfile: false,
            }
        case constants.PROVIDER_ON_CREATE_SERVICE_REQUESTED:
            return {
                ...state,
                loading: false,
                changeServices: false,
            }
        case constants.ON_GET_ALL_CATEGORIES_SUCCEEDED:
            return {
                ...state,
                allCategories: data.data,
                loading: false
            }
        case constants.ON_GET_PROVIDER_INFO_SUCCEEDED:
        case constants.PROVIDER_ON_GET_PROFILE_INFO_SUCCEEDED:
            return {
                ...state,
                providerData: data.data,
                loading: false
            }
        case constants.ON_FILTER_CATEGORY_SUCCEEDED:
        case constants.PROVIDER_ON_SEARCH_NAME_SUCCEEDED:
            return {
                ...state,
                allProviders: data.data,
                loading: false
            }
        case constants.ON_GET_ALL_PROVIDERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                allProviders: data.data.data,
            }
        case constants.ON_GET_PROVIDER_SERVICES_SUCCEEDED:
            return {
                ...state,
                loading: false,
                providerServices: data.data,
            }
        case constants.ON_GET_ALL_PROVIDERS_REVIEWS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                providerReviews: data.data,
            }
        case constants.PROVIDER_ON_LOGIN_SUCCEEDED:
            return {
                ...state,
                loading: false,
                getProfile: true,
            }
        case constants.PROVIDER_ON_CREATE_SERVICE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                changeServices: true,
            }
        case constants.ON_GET_ALL_CATEGORIES_FAILED:
        case constants.PROVIDER_ON_SIGN_UP_SUCCEEDED:
        case constants.PROVIDER_ON_SIGN_UP_FAILED:
        case constants.PROVIDER_ON_LOGIN_FAILED:
        case constants.ON_FILTER_CATEGORY_FAILED:
        case constants.ON_GET_ALL_PROVIDERS_FAILED:
        case constants.ON_GET_PROVIDER_INFO_FAILED:
        case constants.ON_GET_PROVIDER_SERVICES_FAILED:
        case constants.ON_GET_ALL_PROVIDERS_REVIEWS_FAILED:
        case constants.PROVIDER_ON_SEARCH_NAME_FAILED:
        case constants.PROVIDER_ON_GET_PROFILE_INFO_FAILED:
        case constants.PROVIDER_ON_CREATE_SERVICE_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default providersReducer;
