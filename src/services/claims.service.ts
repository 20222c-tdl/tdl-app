import { get } from "./api";

export function getCommunityClaims(communityId: string) {
    return get(`/claims/community/${communityId}`)
}
