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
    // 
    // console.log("opts: ", opts);
    // console.log("err: ", err);
    return [opts, err];
}

export const getCurrentCityWeather = async (cityKey) => {

    const fullUrl = `${process.env.REACT_APP_BASE_URL}currentconditions/v1/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(fullUrl);
    let weather = await response.json();
    // 
    // console.log("weather 1 : ", weather);
    // const weather = {
    //     EpochTime: 1605439560,
    //     HasPrecipitation: false,
    //     IsDayTime: true,
    //     Link: "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    //     LocalObservationDateTime: "2020-11-15T13:26:00+02:00",
    //     MobileLink: "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
    //     PrecipitationType: null,
    //     Temperature: {
    //         Metric: { Value: 21.3, Unit: "C", UnitType: 17 },
    //         Imperial: { Value: 70, Unit: "F", UnitType: 18 }
    //     },
    //     WeatherIcon: 3,
    //     WeatherText: "Partly sunny",
    // }
    return weather;
}

export const getNextDaysCityWeather = async (cityKey) => {
    const fullUrl = `${process.env.REACT_APP_BASE_URL}forecasts/v1/daily/5day/${cityKey}?apikey=${process.env.REACT_APP_API_KEY}&metric=true`;
    const response = await fetch(fullUrl);
    const weather = await response.json();
    // 
    // console.log("weather 2 : ", weather);

    // const weather = {
    //     DailyForecasts: [
    //         {
    //             Date: "2020-11-15T07:00:00+02:00", EpochDate: 1605416400,
    //             Temperature: {
    //                 Maximum: { Value: 21.5, Unit: "C", UnitType: 17 },
    //                 Minimum: { Value: 16.2, Unit: "C", UnitType: 17 },
    //             },
    //             Day: {
    //                 HasPrecipitation: true,
    //                 Icon: 14,
    //                 IconPhrase: "Partly sunny w/ showers",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             },
    //             Night: {
    //                 HasPrecipitation: true,
    //                 Icon: 35,
    //                 IconPhrase: "Partly cloudy",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             }
    //         },
    //         {
    //             Date: "2020-11-16T07:00:00+02:00", EpochDate: 1605502800,
    //             Temperature: {
    //                 Maximum: { Value: 21.5, Unit: "C", UnitType: 17 },
    //                 Minimum: { Value: 16.2, Unit: "C", UnitType: 17 },
    //             },
    //             Day: {
    //                 HasPrecipitation: true,
    //                 Icon: 14,
    //                 IconPhrase: "Partly sunny w/ showers",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             },
    //             Night: {
    //                 HasPrecipitation: true,
    //                 Icon: 35,
    //                 IconPhrase: "Partly cloudy",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             }
    //         },
    //         {
    //             Date: "2020-11-17T07:00:00+02:00", EpochDate: 1605589200, Temperature: {
    //                 Maximum: { Value: 21.5, Unit: "C", UnitType: 17 },
    //                 Minimum: { Value: 16.2, Unit: "C", UnitType: 17 },
    //             },
    //             Day: {
    //                 HasPrecipitation: true,
    //                 Icon: 14,
    //                 IconPhrase: "Partly sunny w/ showers",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             },
    //             Night: {
    //                 HasPrecipitation: true,
    //                 Icon: 35,
    //                 IconPhrase: "Partly cloudy",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             }
    //         },
    //         {
    //             Date: "2020-11-18T07:00:00+02:00", EpochDate: 1605675600, Temperature: {
    //                 Maximum: { Value: 21.5, Unit: "C", UnitType: 17 },
    //                 Minimum: { Value: 16.2, Unit: "C", UnitType: 17 },
    //             },
    //             Day: {
    //                 HasPrecipitation: true,
    //                 Icon: 14,
    //                 IconPhrase: "Partly sunny w/ showers",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             },
    //             Night: {
    //                 HasPrecipitation: true,
    //                 Icon: 35,
    //                 IconPhrase: "Partly cloudy",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             }
    //         },
    //         {
    //             Date: "2020-11-19T07:00:00+02:00", EpochDate: 1605762000, Temperature: {
    //                 Maximum: { Value: 21.5, Unit: "C", UnitType: 17 },
    //                 Minimum: { Value: 16.2, Unit: "C", UnitType: 17 },
    //             },
    //             Day: {
    //                 HasPrecipitation: true,
    //                 Icon: 14,
    //                 IconPhrase: "Partly sunny w/ showers",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             },
    //             Night: {
    //                 HasPrecipitation: true,
    //                 Icon: 35,
    //                 IconPhrase: "Partly cloudy",
    //                 PrecipitationIntensity: "Light",
    //                 PrecipitationType: "Rain",
    //             }
    //         },
    //     ],
    //     Headline: { EffectiveDate: "2020-11-15T13:00:00+02:00", EffectiveEpochDate: 1605438000, Severity: 5, Text: "Expect showery" },
    // }
    return weather;
};