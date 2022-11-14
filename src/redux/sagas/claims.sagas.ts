import { all, call, put, takeLatest } from "redux-saga/effects";
import { ClaimsConstants } from "../constants/claims.constants";
import { AnyAction } from "redux";
import { getCommunityClaims, updateClaimStatus } from "../../services/claims.service";
import {
    onCommunityClaimsFailed,
    onCommunityClaimsSucceeded, onUpdateClaimStatusFailed,
    onUpdateClaimStatusSucceeded
} from "../actions/claims.actions";

function* allCommunityClaims(action: AnyAction) {
    try {
        const { data } = yield call(getCommunityClaims, action.communityId);
        yield put(onCommunityClaimsSucceeded(data));
    } catch (error) {
        yield put(onCommunityClaimsFailed(error));
    }
}

function* updateCommunityClaimStatus(action: AnyAction) {
    try {
        const { data } = yield call(updateClaimStatus, action.data)
        yield put(onUpdateClaimStatusSucceeded(data));
    } catch (error) {
        yield put(onUpdateClaimStatusFailed(error));
    }
}

export function* watchClaims(): Generator {
    yield all([
        takeLatest(ClaimsConstants.ON_GET_COMMUNITY_CLAIMS_REQUESTED, allCommunityClaims),
        takeLatest(ClaimsConstants.UPDATE_CLAIM_REQUESTED, updateCommunityClaimStatus)
    ])
}
