import { AnyAction } from 'redux';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import { loginCommunity, signupCommunity, getAllCommunities, getCommunityInfo, postComment } from '../../services/community.services';
import { onCommunityPostCommentFailed, onCommunityPostCommentSucceeded, onGetAllCommunitiesFailed, onGetAllCommunitiesSucceeded, onGetCommunityProfileFailed, onGetCommunityProfileSucceeded, onLoginCommunityFailed, onLoginCommunitySucceeded, onSignupCommunityFailed, onSignupCommunitySucceeded } from '../actions/community.actions';
import * as constants from '../constants/community.constants';

export function* communitySignup(action: AnyAction) {
    try {
        const { data } = yield call(signupCommunity, action.formData);
        yield put(onSignupCommunitySucceeded(data));
    } catch (error) {
        yield put(onSignupCommunityFailed(error));
    }
}

export function* communityLogin(action: AnyAction) {
    try {
        const { data } = yield call(loginCommunity, action.formData);
        yield put(onLoginCommunitySucceeded(data));
    } catch (error) {
        yield put(onLoginCommunityFailed(error));
    }
}

export function* getCommunities(action: AnyAction) {
    try {
        const { data } = yield call(getAllCommunities);
        yield put(onGetAllCommunitiesSucceeded(data));
    } catch (error) {
        yield put(onGetAllCommunitiesFailed(error));
    }
}

export function* onGetCommunityInfo(action: AnyAction): Generator {
    try {
        const data: any = yield call(getCommunityInfo);
        yield put(onGetCommunityProfileSucceeded(data));
    } catch (error) {
        yield put(onGetCommunityProfileFailed(error));
    }
}

export function* communityPostComment(action: AnyAction) {
    try {
        const data: unknown = yield call(postComment, action.data);
        yield put(onCommunityPostCommentSucceeded(data));
    } catch (error) {
        yield put(onCommunityPostCommentFailed(error));
    }
}

export function* watchCommunity(): Generator {
    yield all([
        takeLatest(constants.COMMUNITY_ON_SIGN_UP_REQUESTED, communitySignup),
        takeLatest(constants.COMMUNITY_ON_LOGIN_REQUESTED, communityLogin),
        takeLatest(constants.ON_GET_ALL_COMMUNITIES_REQUESTED, getCommunities),
        takeLatest([constants.ON_GET_COMMUNITY_PROFILE_REQUESTED, constants.COMMUNITY_ON_LOGIN_SUCCEEDED], onGetCommunityInfo),
        takeLatest(constants.COMMUNITY_ON_POST_COMMENT_REQUESTED, communityPostComment),
    ])
}
