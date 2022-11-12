import { ClaimsConstants } from '../constants/claims.constants'
import { AnyAction } from "redux";

export function onGetCommunityClaimsRequested(communityId: string): AnyAction {
    return {
        type: ClaimsConstants.ON_GET_COMMUNITY_CLAIMS_REQUESTED,
        communityId
    };
}

export function onCommunityClaimsSucceeded(data: unknown): AnyAction {
    return {
        type: ClaimsConstants.COMMUNITY_CLAIMS_SUCCEEDED,
        data
    };
}

export function onCommunityClaimsFailed(error: unknown): AnyAction {
    return {
        type: ClaimsConstants.COMMUNITY_CLAIMS_FAILED,
        error
    };
}
