import fetch from "cross-fetch";

// Four availble api keys - change in the .env file in the root folder

// OkJczHivxqG6KRX3DpIBBoSAKNU8oWrR
// JVrrxepY2p0RcUMTK1jmfVxgA17xjv6p
// zZEJqmhGx5TuhQlY0VZgQsLjyj6TEqc2
// M6QYrgRQfRDTKWQGjFQvd3U5jGp8Zz8R
// 2s082iNkR7NCP9IkkrFFQlJiSy9kVCGE

export const getOutocompleteList = async (curCity) => {

    const fullUrl = `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_LOCATIONS_URL}?apikey=${process.env.REACT_APP_API_KEY}&q=${curCity}`;
    let err = false;
    let opts;

    try {
        const response = await fetch(fullUrl);
        opts = await response.json();
    } catch {
        err = true;
    }
    return [opts, err];
}

export const getCurrentCityWeather = async (cityKey) => {

    const fullUrl = `${process.env.REACT_APP_BASE_URL}currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}`;
    let weather;
    try {
        const response = await fetch(fullUrl);
        weather = await response.json();
    } catch {
        alert("Error has occurred - please try again tomorrow");
    }
    return weather;
}

export const getNextDaysCityWeather = async (cityKey) => {
    const fullUrl = `${process.env.REACT_APP_BASE_URL}forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`;
    let weather;
    try {
        const response = await fetch(fullUrl);
        weather = await response.json();
    } catch {
        alert("Error has occurred - please try again tomorrow");
    }
    return weather;
};