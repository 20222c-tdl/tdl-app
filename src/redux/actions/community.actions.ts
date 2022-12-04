import { AnyAction } from 'redux';
import { ILoginFormData } from '../../views/Login/types';
import { ISignupCommunityFormData } from "../../views/SignupCommunity/types";
import * as constants from '../constants/community.constants';

// onLoginCommunity
export function onLoginCommunityRequested(formData: ILoginFormData): AnyAction {
    return {
        type: constants.COMMUNITY_ON_LOGIN_REQUESTED,
        formData
    };
}

export function onLoginCommunitySucceeded(data: unknown): AnyAction {
    return {
        type: constants.COMMUNITY_ON_LOGIN_SUCCEEDED,
        data
    };
}

export function onLoginCommunityFailed(error: unknown): AnyAction {
    return {
        type: constants.COMMUNITY_ON_LOGIN_FAILED,
        error
    };
}

// onSignup
export function onSignupCommunityRequested(formData: ISignupCommunityFormData): AnyAction {
    return {
        type: constants.COMMUNITY_ON_SIGN_UP_REQUESTED,
        formData
    };
}

export function onSignupCommunitySucceeded(data: unknown): AnyAction {
    return {
        type: constants.COMMUNITY_ON_SIGN_UP_SUCCEEDED,
        data
    };
}

export function onSignupCommunityFailed(error: unknown): AnyAction {
    return {
        type: constants.COMMUNITY_ON_SIGN_UP_FAILED,
        error
    };
}

// onGetAllCommunities
export function onGetAllCommunitiesRequested(): AnyAction {
    return {
        type: constants.ON_GET_ALL_COMMUNITIES_REQUESTED,
    };
}

export function onGetAllCommunitiesSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_ALL_COMMUNITIES_SUCCEEDED,
        data
    };
}

export function onGetAllCommunitiesFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_ALL_COMMUNITIES_FAILED,
        error
    };
}

// onGetCommunityProfile
export function onGetCommunityProfileRequested(): AnyAction {
    return {
        type: constants.ON_GET_COMMUNITY_PROFILE_REQUESTED,
    };
}

export function onGetCommunityProfileSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_COMMUNITY_PROFILE_SUCCEEDED,
        data
    };
}

export function onGetCommunityProfileFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_COMMUNITY_PROFILE_FAILED,
        error
    };
}

// onCommunityPostComment
export function onCommunityPostCommentRequested(data: any): AnyAction {
    return {
        type: constants.COMMUNITY_ON_POST_COMMENT_REQUESTED,
        data
    };
}

export function onCommunityPostCommentSucceeded(data: unknown): AnyAction {
    return {
        type: constants.COMMUNITY_ON_POST_COMMENT_SUCCEEDED,
        data
    };
}

export function onCommunityPostCommentFailed(error: unknown): AnyAction {
    return {
        type: constants.COMMUNITY_ON_POST_COMMENT_FAILED,
        error
    };
}

// onGetCommunityPhoto
export function onGetCommunityPhotoRequested(communityId: string): AnyAction {
    return {
        type: constants.COMMUNITY_ON_GET_PHOTO_REQUESTED,
        communityId
    };
}

export function onGetCommunityPhotoSucceeded(data: unknown): AnyAction {
    return {
        type: constants.COMMUNITY_ON_GET_PHOTO_SUCCEEDED,
        data
    };
}

export function onGetCommunityPhotoFailed(error: unknown): AnyAction {
    return {
        type: constants.COMMUNITY_ON_GET_PHOTO_FAILED,
        error
    };
}