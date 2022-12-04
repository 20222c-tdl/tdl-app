import { all, call, put, takeLatest } from "redux-saga/effects";
import * as constants from '../constants/places.constants';
import { AnyAction } from "redux";
import { onCreateAPlaceFailed, onCreateAPlaceSucceeded, onEditAPlaceFailed, onEditAPlaceSucceeded, onGetPlacesFailed, onGetPlacesSucceeded } from "redux/actions/places.actions";
import { getAllPlaces, onCreatePlace, onEditAPlace } from "services/places.service";

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

export function* watchPlaces(): Generator {
    yield all([
        takeLatest(constants.ON_GET_PLACES_REQUESTED, allPlaces),
        takeLatest(constants.ON_CREATE_PLACE_REQUESTED, createPlace),
        takeLatest(constants.ON_EDIT_A_PLACE_REQUESTED, editAPlace),
    ])
}
