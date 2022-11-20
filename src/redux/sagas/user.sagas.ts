import { AnyAction } from 'redux';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { editClaim, getClaims, initializeUser, loginUser, registerClaim, signupUser, makeReservation } from '../../services/user.services';
import { onEditClaimFailed, onEditClaimSucceeded, onLoginUserFailed, onLoginUserSucceeded, onMakeReservationFailed, onMakeReservationSucceeded, onRegisterAClaimFailed, onRegisterAClaimSucceeded, onSignupUserFailed, onSignupUserSucceeded, onUserGetClaimsFailed, onUserGetClaimsSucceeded, userOnInitializeFailed, userOnInitializeSucceeded } from '../actions/user.actions';
import * as constants from '../constants/user.constants';

export function* userInitialize(action: AnyAction) {
    try {
        const data:unknown  = yield call(initializeUser);
        yield put(userOnInitializeSucceeded(data));
    } catch (error) {
        yield put(userOnInitializeFailed(error));
    }
}

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
        const data: unknown = yield call(loginUser, action.formData);
        yield put(onLoginUserSucceeded(data));
    } catch (error) {
        yield put(onLoginUserFailed(error));
    }
}

export function* userRegisterClaim(action: AnyAction) {
    try {
        const data: unknown = yield call(registerClaim, action.formData);
        yield put(onRegisterAClaimSucceeded(data));
    } catch (error) {
        yield put(onRegisterAClaimFailed(error));
    }
}

export function* userGetClaims(action: AnyAction) {
    try {
        const data: unknown = yield call(getClaims, action.userId);
        yield put(onUserGetClaimsSucceeded(data));
    } catch (error) {
        yield put(onUserGetClaimsFailed(error));
    }
}

export function* userEditClaim(action: AnyAction) {
    try {
        const data: unknown = yield call(editClaim, action.formData);
        yield put(onEditClaimSucceeded(data));
    } catch (error) {
        yield put(onEditClaimFailed(error));
    }
}

export function* userMakeReservation(action: AnyAction) {
    try {
        const data: unknown = yield call(makeReservation, action.data);
        yield put(onMakeReservationSucceeded(data));
    } catch (error) {
        yield put(onMakeReservationFailed(error));
    }
}

export function* watchUsers(): Generator {
    yield all([
        takeLatest(constants.USER_ON_INITIALIZE_REQUESTED, userInitialize),
        takeLatest(constants.USER_ON_SIGN_UP_REQUESTED, userSignUp),
        takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
        takeLatest(constants.USER_ON_REGISTER_A_CLAIM_REQUESTED, userRegisterClaim),
        takeLatest(constants.USER_ON_GET_CLAIMS_REQUESTED, userGetClaims),
        takeLatest(constants.USER_ON_EDIT_CLAIM_REQUESTED, userEditClaim),
        takeLatest(constants.USER_ON_MAKE_RESERVATION_REQUESTED, userMakeReservation),
    ])
}
