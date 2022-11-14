import { AnyAction } from "redux";
import { ClaimsConstants } from "../constants/claims.constants";
import { IClaim, ClaimsState } from "../../types/claims.types";

export interface ClaimsState {
    claims: IClaim[],
    error: unknown,
    loading: boolean,
    claimHasChanged: boolean,
}

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
                claimHasChanged: false,
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
                claimHasChanged: true,
            }
        default:
            const _exhaustiveCheck: never = type;
            return state;
    }
}
