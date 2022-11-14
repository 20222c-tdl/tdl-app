import { AnyAction } from 'redux';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loginUser, signupUser } from '../../services/user.services';
import { onLoginUserFailed, onLoginUserSucceeded, onSignupUserFailed, onSignupUserSucceeded } from '../actions/user.actions';
import * as constants from '../constants/user.constants';

export function* userSignUp(action: AnyAction) {
    try {
        const { data } = yield call(signupUser, action.formData);
        yield put(onSignupUserSucceeded(data));
    } catch (error) {
        yield put(onSignupUserFailed(error));
    }
}

export function* userLogin(action: AnyAction) {
    try {
        const { data } = yield call(loginUser, action.formData);
        yield put(onLoginUserSucceeded(data));
    } catch (error) {
        yield put(onLoginUserFailed(error));
    }
}

export function* watchUsers(): Generator {
    yield all([
        takeLatest(constants.USER_ON_SIGN_UP_REQUESTED, userSignUp),
        takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin)
    ])
}
