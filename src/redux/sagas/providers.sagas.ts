import { AnyAction } from 'redux';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { onGetAllProvidersCategoriesFailed, onGetAllProvidersCategoriesSucceeded, onLoginProviderFailed, onLoginProviderSucceeded, onSignupProviderFailed, onSignupProviderSucceeded } from 'redux/actions/providers.actions';
import { loginProvider, signupProvider, getAllCategories } from '../../services/providers.services';
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

export function* watchProviders(): Generator {
    yield all([
        takeLatest(constants.PROVIDER_ON_SIGN_UP_REQUESTED, providerSignup),
        takeLatest(constants.PROVIDER_ON_LOGIN_SUCCEEDED, onLoginProvider),
        takeLatest(constants.ON_GET_ALL_CATEGORIES_REQUESTED, getCategories)

    ])
}
