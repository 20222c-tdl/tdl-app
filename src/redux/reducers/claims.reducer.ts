import { AnyAction } from "redux";
import { ClaimsConstants } from "../constants/claims.constants";
import { IClaim, ClaimsState } from "../../types/claims.types";

const initialState: ClaimsState = {
    claims: [],
    loading: false,
    error: null,
    claimHasChanged: false,
}

export function claimsReducer(state = initialState, action: AnyAction) {
    const { type, data } = <{ type: ClaimsConstants, data: unknown }>action
    switch (type) {
        case ClaimsConstants.ON_GET_COMMUNITY_CLAIMS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case ClaimsConstants.UPDATE_CLAIM_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case ClaimsConstants.COMMUNITY_CLAIMS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                claims: data
            };
        case ClaimsConstants.COMMUNITY_CLAIMS_FAILED:
        case ClaimsConstants.UPDATE_CLAIM_FAILED:
            return {
                ...state,
                loading: false,
                error: data
            };
        case ClaimsConstants.UPDATE_CLAIM_SUCCEEDED:
            return {
                ...state,
                loading: false,
            }
        default:
            const _exhaustiveCheck: never = type;
            return state;
    }
}
