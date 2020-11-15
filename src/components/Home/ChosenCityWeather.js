import { useState, useEffect } from "react";
import NextDaysWeather from "./NextDaysWeather";
import { useDispatch, useSelector } from "react-redux";
import { addCityToFave, removeCityFromFave } from "../../store/actions/actions";
import {
  getCurrentCityWeather,
  getNextDaysCityWeather,
} from "../../services/services";
import StarTwoToneIcon from "@material-ui/icons/StarTwoTone";
import "./ChosenCityWeather.css";

const ChosenCityWeather = ({ chosenCity }) => {
  const [curWeather, setCurWeather] = useState(null);
  const [nextDaysWeather, setNextDaysWeather] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const favorites = useSelector((state) => state.app.favorites);

  // Get the weather for current city at the moment and for the next 5 days
  const fetchAll = (cityKey) => {
    Promise.all([
      getCurrentCityWeather(cityKey),
      getNextDaysCityWeather(cityKey),
    ])
      .then((result) => {
        if (result && result.length > 0) {
          // Tempetature at the moment
          const cur = result[0][0].Temperature;
          setCurWeather(cur);

          // Temperature for the next 5 days
          const next = result[1].DailyForecasts;
          setNextDaysWeather(next);
        }
      })
      .catch((err) => {});
  };

  // Function that called on favorite add / remove click
  const faveClicked = () => {
    if (isFavorite) {
      dispatch(
        removeCityFromFave({
          name: chosenCity.LocalizedName,
          key: chosenCity.Key,
        })
      );
      setIsFavorite(!isFavorite);
    } else {
      dispatch(
        addCityToFave({
          name: chosenCity.LocalizedName,
          key: chosenCity.Key,
        })
      );
      setIsFavorite(!isFavorite);
    }
  };

  // On choosing city function
  useEffect(() => {
    if (chosenCity) {
      setIsFavorite(favorites.some((fave) => fave.key === chosenCity.Key));
      fetchAll(chosenCity.Key);
    }
  }, [chosenCity]);

  const dispatch = useDispatch();

  return (
    <>
      {curWeather && (
        <div className="curCityWeather">
          <div className="faveRow">
            <button
              className="fave-btn"
              onClick={() => {
                faveClicked();
              }}
            >
              {isFavorite ? "Remove from favorites" : "Add to favorites"}
              <StarTwoToneIcon
                className={`star-icn${isFavorite ? " fave" : ""}`}
              />
            </button>
          </div>
          <div className="cityName">{chosenCity.LocalizedName}</div>
          <div className="metricTemp">
            {`${curWeather.Metric.Value} ${curWeather.Metric.Unit}`}
          </div>
          {nextDaysWeather && nextDaysWeather.length > 0 && (
            <NextDaysWeather nextDays={nextDaysWeather} />
          )}
        </div>
      )}
    </>
  );
};

export default ChosenCityWeather;
