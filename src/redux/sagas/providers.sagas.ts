import { AnyAction } from 'redux';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { onCreateAServiceFailed, onCreateAServiceSucceeded, onEditAServiceFailed, onEditAServiceSucceeded, onFilterCategoryFailed, onFilterCategorySucceeded, onGetAllProvidersCategoriesFailed, onGetAllProvidersCategoriesSucceeded, onGetAllProvidersFailed, onGetAllProvidersReviewsFailed, onGetAllProvidersReviewsSucceeded, onGetAllProvidersSucceeded, onGetProfileInfoFailed, onGetProfileInfoSucceeded, onGetProviderInfoFailed, onGetProviderInfoSucceeded, onGetProviderServicesFailed, onGetProviderServicesSucceeded, onLoginProviderFailed, onLoginProviderSucceeded, onProviderUpdateProfileFailed, onProviderUpdateProfileSucceeded, onSearchNameFailed, onSearchNameSucceeded, onSignupProviderFailed, onSignupProviderSucceeded } from 'redux/actions/providers.actions';
import { loginProvider, signupProvider, getAllCategories, filterCategory, getAllProviders, getProviderInfo, getAllProvidersReviews, getProviderServices, searchName, getProfileInfo, createService, editService, editProfile } from '../../services/providers.services';
import * as constants from '../constants/providers.constants';

export function* providerSignup(action: AnyAction) {
    try {
        const { data } = yield call(signupProvider, action.formData);
        yield put(onSignupProviderSucceeded(data));
    } catch (error) {
        yield put(onSignupProviderFailed(error));
    }
}

export function* providerGetProfileInfo(action: AnyAction): Generator {
    try {
        const data: any = yield call(getProfileInfo);
        yield put(onGetProfileInfoSucceeded(data));
    } catch (error) {
        yield put(onGetProfileInfoFailed(error));
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
        const { data } = yield call(filterCategory, action.category);
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

export function* onCreateService(action: AnyAction): Generator {
    try {
        const { data }: any = yield call(createService, action.data);
        yield put(onCreateAServiceSucceeded(data));
    } catch (error) {
        yield put(onCreateAServiceFailed(error));
    }
}

export function* providerEditAService(action: AnyAction) {
    try {
        const { data } = yield call(editService, action.data);
        yield put(onEditAServiceSucceeded(data));
    } catch (error) {
        yield put(onEditAServiceFailed(error));
    }
}

export function* providerUpdateProfile(action: AnyAction) {
    try {
        const { data } = yield call(editProfile, action.data, action.userId);
        yield put(onProviderUpdateProfileSucceeded(data));
    } catch (error) {
        yield put(onProviderUpdateProfileFailed(error));
    }
}


export function* watchProviders(): Generator {
    yield all([
        takeLatest(constants.PROVIDER_ON_SIGN_UP_REQUESTED, providerSignup),
        takeLatest(constants.PROVIDER_ON_LOGIN_REQUESTED, onLoginProvider),
        takeLatest([constants.PROVIDER_ON_GET_PROFILE_INFO_REQUESTED], providerGetProfileInfo),
        takeLatest(constants.ON_GET_ALL_CATEGORIES_REQUESTED, getCategories),
        takeLatest(constants.ON_FILTER_CATEGORY_REQUESTED, onFilterCategory),
        takeLatest(constants.ON_GET_ALL_PROVIDERS_REQUESTED, onGetAllProviders),
        takeLatest(constants.ON_GET_PROVIDER_INFO_REQUESTED, onGetProviderInfo),
        takeLatest(constants.ON_GET_ALL_PROVIDERS_REVIEWS_REQUESTED, onGetProviderReviews),
        takeLatest(constants.ON_GET_PROVIDER_SERVICES_REQUESTED, onGetProviderServices),
        takeLatest(constants.PROVIDER_ON_SEARCH_NAME_REQUESTED, onSearchName),
        takeLatest(constants.PROVIDER_ON_CREATE_SERVICE_REQUESTED, onCreateService),
        takeLatest(constants.PROVIDER_ON_EDIT_SERVICE_REQUESTED, providerEditAService),
        takeLatest(constants.PROVIDER_ON_UPDATE_PROFILE_REQUESTED, providerUpdateProfile),
    ])
}
