import { AnyAction } from 'redux';
import { IPlace } from 'types/places.types';
import { IReservationPlaceFormData } from 'views/PlaceDetails/types';
import {IPlaceFormData } from 'views/PlacesManagement/types';
import * as constants from '../constants/places.constants';

// onGetPlaces
export function onGetPlacesRequested(communityId: string): AnyAction {
    return {
        type: constants.ON_GET_PLACES_REQUESTED,
        communityId
    };
}

export function onGetPlacesSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_PLACES_SUCCEEDED,
        data
    };
}

export function onGetPlacesFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_PLACES_FAILED,
        error
    };
}

// onCreateAPlace
export function onCreateAPlaceRequested(data: IPlaceFormData): AnyAction {
    return {
        type: constants.ON_CREATE_PLACE_REQUESTED,
        data
    };
}

export function onCreateAPlaceSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_CREATE_PLACE_SUCCEEDED,
        data
    };
}

export function onCreateAPlaceFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_CREATE_PLACE_FAILED,
        error
    };
}

// onEditAPlace
export function onEditAPlaceRequested(data: IPlace): AnyAction {
    return {
        type: constants.ON_EDIT_A_PLACE_REQUESTED,
        data
    };
}

export function onEditAPlaceSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_EDIT_A_PLACE_SUCCEEDED,
        data
    };
}

export function onEditAPlaceFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_EDIT_A_PLACE_FAILED,
        error
    };
}

// onGetPlaceInfo
export function onGetPlaceInfoRequested(placeId: string): AnyAction {
    return {
        type: constants.ON_GET_PLACE_INFO_REQUESTED,
        placeId
    };
}

export function onGetPlaceInfoSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_GET_PLACE_INFO_SUCCEEDED,
        data
    };
}

export function onGetPlaceInfoFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_GET_PLACE_INFO_FAILED,
        error
    };
}

// onMakePlaceReservation
export function onMakePlaceReservationRequested(data: IReservationPlaceFormData): AnyAction {
    return {
        type: constants.ON_MAKE_PLACE_RESERVATION_REQUESTED,
        data
    };
}

export function onMakePlaceReservationSucceeded(data: unknown): AnyAction {
    return {
        type: constants.ON_MAKE_PLACE_RESERVATION_SUCCEEDED,
        data
    };
}

export function onMakePlaceReservationFailed(error: unknown): AnyAction {
    return {
        type: constants.ON_MAKE_PLACE_RESERVATION_FAILED,
        error
    };
}