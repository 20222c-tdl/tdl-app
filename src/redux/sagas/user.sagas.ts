import { AnyAction } from 'redux';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { editClaim, getClaims, initializeUser, loginUser, registerClaim, signupUser, makeReservation, postComment, getProfileInfo, getReservations, cancelReservation, getReviews, leaveAReview, payReservation } from '../../services/user.services';
import { onCancelReservationFailed, onCancelReservationSucceded, onEditClaimFailed, onEditClaimSucceeded, onGetAllReservationsFailed, onGetAllReservationsSucceeded, onGetProfileInfoFailed, onGetProfileInfoSucceeded, onGetUserReviewsFailed, onGetUserReviewsSucceeded, onLeaveAReviewFailed, onLeaveAReviewSucceeded, onLoginUserFailed, onLoginUserSucceeded, onMakeReservationFailed, onMakeReservationSucceeded, onPayReservationFailed, onPayReservationSucceeded, onPostCommentFailed, onPostCommentSucceeded, onRegisterAClaimFailed, onRegisterAClaimSucceeded, onSignupUserFailed, onSignupUserSucceeded, onUserGetClaimsFailed, onUserGetClaimsSucceeded, userOnInitializeFailed, userOnInitializeSucceeded } from '../actions/user.actions';
import * as constants from '../constants/user.constants';

export function* userInitialize(action: AnyAction) {
    try {
        const data: unknown = yield call(initializeUser);
        yield put(userOnInitializeSucceeded(data));
    } catch (error) {
        yield put(userOnInitializeFailed(error));
    }
}


export function* userGetProfileInfo(action: AnyAction): Generator {
    try {
        const data: any = yield call(getProfileInfo);
        yield put(onGetProfileInfoSucceeded(data));
    } catch (error) {
        yield put(onGetProfileInfoFailed(error));
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
        const { data } = yield call(loginUser, action.formData);
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

export function* userPostComment(action: AnyAction) {
    try {
        const data: unknown = yield call(postComment, action.data);
        yield put(onPostCommentSucceeded(data));
    } catch (error) {
        yield put(onPostCommentFailed(error));
    }
}

export function* userGetReservations(action: AnyAction): Generator {
    try {
        const { data }: any = yield call(getReservations, action.userId);
        yield put(onGetAllReservationsSucceeded(data));
    } catch (error) {
        yield put(onGetAllReservationsFailed(error));
    }
}

export function* userCancelReservation(action: AnyAction): Generator {
    try {
        const { data }: any = yield call(cancelReservation, action.reservationId);
        yield put(onCancelReservationSucceded(data));
    } catch (error) {
        yield put(onCancelReservationFailed(error));
    }
}

export function* userGetReviews(action: AnyAction): Generator {
    try {
        const { data }: any = yield call(getReviews, action.userId);
        yield put(onGetUserReviewsSucceeded(data));
    } catch (error) {
        yield put(onGetUserReviewsFailed(error));
    }
}

export function* userLeaveAReview(action: AnyAction): Generator {
    try {
        const { data }: any = yield call(leaveAReview, action.data);
        yield put(onLeaveAReviewSucceeded(data));
    } catch (error) {
        yield put(onLeaveAReviewFailed(error));
    }
}

export function* userPayReservation(action: AnyAction): Generator {
    try {
        const { data }: any = yield call(payReservation, action.reservationId);
        yield put(onPayReservationSucceeded(data));
    } catch (error) {
        yield put(onPayReservationFailed(error));
    }
}


export function* watchUsers(): Generator {
    yield all([
        takeLatest(constants.USER_ON_INITIALIZE_REQUESTED, userInitialize),
        takeLatest([constants.USER_ON_GET_PROFILE_INFO_REQUESTED, constants.USER_ON_LOGIN_SUCCEEDED], userGetProfileInfo),
        takeLatest(constants.USER_ON_SIGN_UP_REQUESTED, userSignUp),
        takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
        takeLatest(constants.USER_ON_REGISTER_A_CLAIM_REQUESTED, userRegisterClaim),
        takeLatest(constants.USER_ON_GET_CLAIMS_REQUESTED, userGetClaims),
        takeLatest(constants.USER_ON_EDIT_CLAIM_REQUESTED, userEditClaim),
        takeLatest(constants.USER_ON_MAKE_RESERVATION_REQUESTED, userMakeReservation),
        takeLatest(constants.USER_ON_POST_COMMENT_REQUESTED, userPostComment),
        takeLatest(constants.USER_ON_GET_ALL_RESERVATIONS_REQUESTED, userGetReservations),
        takeLatest(constants.USER_ON_CANCEL_RESERVATION_REQUESTED, userCancelReservation),
        takeLatest(constants.USER_ON_GET_REVIEWS_REQUESTED, userGetReviews),
        takeLatest(constants.USER_ON_LEAVE_A_REVIEW_REQUESTED, userLeaveAReview),
        takeLatest(constants.USER_ON_PAY_RESERVATION_REQUESTED, userPayReservation),
    ])
}
