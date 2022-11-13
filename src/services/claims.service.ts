import { get, patch } from "./api";
import { IClaimStatusUpdate } from "../views/Claims/types";

export function getCommunityClaims(communityId: string) {
    return get(`/claims/community/${communityId}`)
}

export function updateClaimStatus(data: IClaimStatusUpdate) {
    return patch(`/claims/${data.claimId}/status/${data.status}`)
}
