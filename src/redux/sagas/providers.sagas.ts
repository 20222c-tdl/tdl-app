import { AnyAction } from 'redux';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { onFilterCategoryFailed, onFilterCategorySucceeded, onGetAllProvidersCategoriesFailed, onGetAllProvidersCategoriesSucceeded, onGetAllProvidersFailed, onGetAllProvidersReviewsFailed, onGetAllProvidersReviewsSucceeded, onGetAllProvidersSucceeded, onGetProviderInfoFailed, onGetProviderInfoSucceeded, onGetProviderServicesFailed, onGetProviderServicesSucceeded, onLoginProviderFailed, onLoginProviderSucceeded, onSearchNameFailed, onSearchNameSucceeded, onSignupProviderFailed, onSignupProviderSucceeded } from 'redux/actions/providers.actions';
import { loginProvider, signupProvider, getAllCategories, filterCategory, getAllProviders, getProviderInfo, getAllProvidersReviews, getProviderServices, searchName } from '../../services/providers.services';
import * as constants from '../constants/providers.constants';

export function* providerSignup(action: AnyAction) {
    try {
        const { data } = yield call(signupProvider, action.formData);
        yield put(onSignupProviderSucceeded(data));
    } catch (error) {
        yield put(onSignupProviderFailed(error));
    }
}

export function* onLoginProvider(action: AnyAction) {
    try {
        const { data } = yield call(loginProvider, action.formData);
        yield put(onLoginProviderSucceeded(data));
    } catch (error) {
        yield put(onLoginProviderFailed(error));
    }
}

export function* getCategories(action: AnyAction) {
    try {
        const { data } = yield call(getAllCategories);
        yield put(onGetAllProvidersCategoriesSucceeded(data));
    } catch (error) {
        yield put(onGetAllProvidersCategoriesFailed(error));
    }
}

export function* onFilterCategory(action: AnyAction) {
    try {
        const {data} = yield call(filterCategory, action.category);
        yield put(onFilterCategorySucceeded(data));
    } catch (error) {
        yield put(onFilterCategoryFailed(error));
    }
}

export function* onGetAllProviders(action: AnyAction) {
    try {
        const data: unknown = yield call(getAllProviders);
        yield put(onGetAllProvidersSucceeded(data));
    } catch (error) {
        yield put(onGetAllProvidersFailed(error));
    }
}

export function* onGetProviderInfo(action: AnyAction) {
    try {
        const data: unknown = yield call(getProviderInfo, action.providerId);
        yield put(onGetProviderInfoSucceeded(data));
    } catch (error) {
        yield put(onGetProviderInfoFailed(error));
    }
}

export function* onGetProviderReviews(action: AnyAction) {
    try {
        const data: unknown = yield call(getAllProvidersReviews, action.providerId);
        yield put(onGetAllProvidersReviewsSucceeded(data));
    } catch (error) {
        yield put(onGetAllProvidersReviewsFailed(error));
    }
}

export function* onGetProviderServices(action: AnyAction) {
    try {
        const data: unknown = yield call(getProviderServices, action.providerId);
        yield put(onGetProviderServicesSucceeded(data));
    } catch (error) {
        yield put(onGetProviderServicesFailed(error));
    }
}

export function* onSearchName(action: AnyAction): Generator {
    try {
        const { data }: any = yield call(searchName, action.searchName);
        yield put(onSearchNameSucceeded(data));
    } catch (error) {
        yield put(onSearchNameFailed(error));
    }
}


export function* watchProviders(): Generator {
    yield all([
        takeLatest(constants.PROVIDER_ON_SIGN_UP_REQUESTED, providerSignup),
        takeLatest(constants.PROVIDER_ON_LOGIN_SUCCEEDED, onLoginProvider),
        takeLatest(constants.ON_GET_ALL_CATEGORIES_REQUESTED, getCategories),
        takeLatest(constants.ON_FILTER_CATEGORY_REQUESTED, onFilterCategory),
        takeLatest(constants.ON_GET_ALL_PROVIDERS_REQUESTED, onGetAllProviders),
        takeLatest(constants.ON_GET_PROVIDER_INFO_REQUESTED, onGetProviderInfo),
        takeLatest(constants.ON_GET_ALL_PROVIDERS_REVIEWS_REQUESTED, onGetProviderReviews),
        takeLatest(constants.ON_GET_PROVIDER_SERVICES_REQUESTED, onGetProviderServices),
        takeLatest(constants.PROVIDER_ON_SEARCH_NAME_REQUESTED, onSearchName),

    ])
}
