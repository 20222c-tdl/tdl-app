import { AnyAction } from "redux";
import { ClaimsConstants } from "../constants/claims.constants";
import { IClaim } from "../../types/claims.types";

export interface ClaimsState {
    claims: IClaim[],
    error: unknown
    loading: boolean
}

const initialState: ClaimsState = {
    claims: [],
    loading: false,
    error: null
}

export function claimsReducer(state = initialState, action: AnyAction) {
    const { type, data } = <{type: ClaimsConstants, data: unknown}>action
    switch (type) {
        case ClaimsConstants.ON_GET_COMMUNITY_CLAIMS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case ClaimsConstants.COMMUNITY_CLAIMS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                claims: data
            };
        case ClaimsConstants.COMMUNITY_CLAIMS_FAILED:
            return {
                ...state,
                loading: false,
                error: data
            };
        default:
            const _exhaustiveCheck: never = type;
            return state;
    }
}
