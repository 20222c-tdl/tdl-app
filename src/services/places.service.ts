import { AxiosResponse } from "axios";
import { IPlace } from "types/places.types";
import { IReservationPlaceFormData } from "views/PlaceDetails/types";
import { IPlaceFormData } from "views/PlacesManagement/types";
import { post, get, patch, requestDelete } from "./api";

export function getAllPlaces(communityId: string) {
    return get(`/places/community/${communityId}`)
}

export function onCreatePlace(data: IPlaceFormData) {
    return post(`/places`, data)
}

export async function onEditAPlace(data: IPlace): Promise<AxiosResponse> {
    const response = await patch(`/places/${data.id}`, data);
    return response;
}

export function onGetPlaceData(placeId: string) {
    return get(`/places/${placeId}`)
}

export function onPostAReservation(data: IReservationPlaceFormData) {
    return post(`/place-reservation`, data)
}
