import { Reducer } from 'redux';
import * as constants from '../constants/providers.constants';

const initialState = {
    loading: false,
    data: null,
    providerData: null,
    allCategories: null,
    providers: null,
    allProviders: null,
}

const providersReducer: Reducer = (state = {}, action) => {
    const { type, data } = action;

    switch (type) {
        case constants.ON_GET_ALL_CATEGORIES_REQUESTED:
        case constants.PROVIDER_ON_SIGN_UP_REQUESTED:
        case constants.PROVIDER_ON_LOGIN_REQUESTED:
        case constants.ON_FILTER_CATEGORY_REQUESTED:
        case constants.ON_GET_ALL_PROVIDERS_REQUESTED:
        case constants.ON_GET_PROVIDER_INFO_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case constants.ON_GET_ALL_CATEGORIES_SUCCEEDED:
            return {
                ...state,
                allCategories: data.data,
                loading: false
            }
        case constants.PROVIDER_ON_LOGIN_SUCCEEDED:
        case constants.ON_GET_PROVIDER_INFO_SUCCEEDED:
            return {
                ...state,
                providerData: data,
                loading: false
            }
        case constants.ON_FILTER_CATEGORY_SUCCEEDED:
            return {
                ...state,
                providers: data.data.data,
                loading: false
            }
        case constants.ON_GET_ALL_PROVIDERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                allProviders: data.data.data,
            }
        case constants.ON_GET_ALL_CATEGORIES_FAILED:
        case constants.PROVIDER_ON_SIGN_UP_SUCCEEDED:
        case constants.PROVIDER_ON_SIGN_UP_FAILED:
        case constants.PROVIDER_ON_LOGIN_FAILED:
        case constants.ON_FILTER_CATEGORY_FAILED:
        case constants.ON_GET_ALL_PROVIDERS_FAILED:
        case constants.ON_GET_PROVIDER_INFO_FAILED:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

export default providersReducer;
