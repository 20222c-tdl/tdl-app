import { all, call, put, takeLatest } from "redux-saga/effects";
import * as constants from '../constants/places.constants';
import { AnyAction } from "redux";
import { onCreateAPlaceFailed, onCreateAPlaceSucceeded, onEditAPlaceFailed, onEditAPlaceSucceeded, onGetPlaceInfoFailed, onGetPlaceInfoSucceeded, onGetPlacesFailed, onGetPlacesSucceeded, onMakePlaceReservationFailed, onMakePlaceReservationSucceeded } from "redux/actions/places.actions";
import { getAllPlaces, onCreatePlace, onEditAPlace, onGetPlaceData, onPostAReservation } from "services/places.service";

function* allPlaces(action: AnyAction) {
    try {
        const { data } = yield call(getAllPlaces, action.communityId);
        yield put(onGetPlacesSucceeded(data));
    } catch (error) {
        yield put(onGetPlacesFailed(error));
    }
}

function* createPlace(action: AnyAction) {
    try {
        const { data } = yield call(onCreatePlace, action.data);
        yield put(onCreateAPlaceSucceeded(data));
    } catch (error) {
        yield put(onCreateAPlaceFailed(error));
    }
}

export function* editAPlace(action: AnyAction) {
    try {
        const { data } = yield call(onEditAPlace, action.data);
        yield put(onEditAPlaceSucceeded(data));
    } catch (error) {
        yield put(onEditAPlaceFailed(error));
    }
}

export function* getPlaceData(action: AnyAction) {
    try {
        const { data } = yield call(onGetPlaceData, action.placeId);
        yield put(onGetPlaceInfoSucceeded(data));
    } catch (error) {
        yield put(onGetPlaceInfoFailed(error));
    }
}

export function* makeAReservation(action: AnyAction) {
    try {
        const { data } = yield call(onPostAReservation, action.data);
        yield put(onMakePlaceReservationSucceeded(data));
    } catch (error) {
        yield put(onMakePlaceReservationFailed(error));
    }
}

export function* watchPlaces(): Generator {
    yield all([
        takeLatest(constants.ON_GET_PLACES_REQUESTED, allPlaces),
        takeLatest(constants.ON_CREATE_PLACE_REQUESTED, createPlace),
        takeLatest(constants.ON_EDIT_A_PLACE_REQUESTED, editAPlace),
        takeLatest(constants.ON_GET_PLACE_INFO_REQUESTED, getPlaceData),
        takeLatest(constants.ON_MAKE_PLACE_RESERVATION_REQUESTED, makeAReservation),
    ])
}
