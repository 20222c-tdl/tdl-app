import { ClaimsConstants } from '../constants/claims.constants'
import { AnyAction } from "redux";
import { IClaimStatusUpdate } from "../../views/Claims/types";

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

export function onUpdateClaimStatusRequested(data: IClaimStatusUpdate) {
    return {
        type: ClaimsConstants.UPDATE_CLAIM_REQUESTED,
        data
    };
}

export function onUpdateClaimStatusSucceeded(data: IClaimStatusUpdate) {
    return {
        type: ClaimsConstants.UPDATE_CLAIM_SUCCEEDED,
        data
    };
}

export function onUpdateClaimStatusFailed(error: unknown) {
    return {
        type: ClaimsConstants.UPDATE_CLAIM_FAILED,
        error
    };
}
