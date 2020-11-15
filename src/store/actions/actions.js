import { ADD_CITY_TO_FAVE, GET_LIST_OF_CITIES, REMOVE_CITY_FROM_FAVE, GET_FAVE_CITIES } from '../actions/actions-types';

export const getListOfCities = (city) => {
    return {
        type: GET_LIST_OF_CITIES,
        payload: city
    };
}

export const addCityToFave = (city) => {
    return {
        type: ADD_CITY_TO_FAVE,
        payload: city
    };
}

export const removeCityFromFave = (city) => {
    return {
        type: REMOVE_CITY_FROM_FAVE,
        payload: city
    };
}

export const getFaveCities = (city) => {
    return {
        type: GET_FAVE_CITIES,
        payload: city
    };
}