import { AxiosResponse } from "axios";
import { IPlaceFormData } from "views/PlacesManagement/types";
import { post, get, patch, requestDelete } from "./api";

export function getAllPlaces(communityId: string) {
    return get(`/places/community/${communityId}`)
}

export function onCreatePlace(data: IPlaceFormData) {
    return post(`/places`, data)
}

export async function onEditAPlace(data: any): Promise<AxiosResponse> {
    const response = await patch(`/places/${data.id}`, data);
    return response;
}
