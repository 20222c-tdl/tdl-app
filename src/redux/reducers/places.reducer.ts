import { Reducer } from "redux";
import * as constants from '../constants/places.constants';


const initialState = {
    places: [],
    loading: false,
    changePlaces: false,
    placeData: null,
}

const placesReducer: Reducer = (state = initialState, action) => {
    const { type, data } = action;

    switch (type) {
        case constants.ON_GET_PLACES_REQUESTED:
        case constants.ON_GET_PLACE_INFO_REQUESTED:
        case constants.ON_MAKE_PLACE_RESERVATION_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case constants.ON_CREATE_PLACE_REQUESTED:
        case constants.ON_EDIT_A_PLACE_REQUESTED:
            return {
                ...state,
                loading: true,
                changePlaces: false,
            }
        case constants.ON_GET_PLACES_SUCCEEDED:
            return {
                ...state,
                loading: false,
                places: data
            };
        case constants.ON_CREATE_PLACE_SUCCEEDED:
        case constants.ON_EDIT_A_PLACE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                changePlaces: true
            };
        case constants.ON_GET_PLACE_INFO_SUCCEEDED:
            return {
                ...state,
                loading: false,
                placeData: data
            };
        case constants.ON_GET_PLACES_FAILED:
        case constants.ON_CREATE_PLACE_FAILED:
        case constants.ON_EDIT_A_PLACE_FAILED:
        case constants.ON_GET_PLACE_INFO_FAILED:
        case constants.ON_MAKE_PLACE_RESERVATION_SUCCEEDED:
        case constants.ON_MAKE_PLACE_RESERVATION_FAILED:
            return {
                ...state,
                loading: false,
                error: data
            };
        default:
            return state;
    }
}

export default placesReducer;
