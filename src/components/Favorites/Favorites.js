import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FaveCityWeather from "./FaveCityWeather";
import Alert from "@material-ui/lab/Alert";
import { getCurrentCityWeather } from "../../services/services";
import "./Favorites.css";

//Component that contains all favorite city 'cards'
const Favorites = () => {
  const [favoriteWeather, setFavoriteWeather] = useState(null);
  const favorites = useSelector((state) => state.app.favorites);
  const [err, setErr] = useState(false);

  // Wait for all requests to receive temperature info of all favorite cities
  const fetchAll = (promises) => {
    Promise.all(promises)
      .then((result) => {
        if (result && result.length > 0) {
          const data = result.map((item, idx) => {
            return {
              ...item[0],
              name: favorites[idx].name,
              key: favorites[idx].key,
            };
          });
          setFavoriteWeather(data);
        }
      })
      .catch(() => {
        setErr(true);
      });
  };

  useEffect(() => {
    // Send API requests to get all the info on favorite cities
    const promises = [];
    if (favorites.length > 0) {
      favorites.forEach((element) => {
        promises.push(getCurrentCityWeather(element.key));
      });
      fetchAll(promises);
    }
  }, []);

  return (
    <div className="root">
      {favoriteWeather &&
        favoriteWeather.map((cityWeather) => (
          <FaveCityWeather key={cityWeather.name} cityWeather={cityWeather} />
        ))}
      {err && <Alert severity="error">Fetch failed!</Alert>}
    </div>
  );
};

export default Favorites;
