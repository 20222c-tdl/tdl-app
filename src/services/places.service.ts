import { IPlaceFormData } from "views/PlacesManagement/types";
import { post, get, patch, requestDelete } from "./api";

export function getAllPlaces(communityId: string) {
    return get(`/places/community/${communityId}`)
}

export function onCreatePlace(data: IPlaceFormData) {
    return post(`/places`, data)
}