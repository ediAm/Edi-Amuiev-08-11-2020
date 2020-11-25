import React, { useState, useEffect } from "react";
import SearchCities from "./SearchCities";
import ChosenCityWeather from "./ChosenCityWeather";
import { useHistory } from "react-router-dom";

const Home = () => {
  // Creating a state variable with a default value of 'Tel Aviv'
  const [chosenCity, setChosenCity] = useState(null);
  const history = useHistory();

  // Check if redirected from favorites - occurres only once on mount (on page load)
  useEffect(() => {
    if (history?.location?.state?.fave) {
      setChosenCity(history.location.state.fave);
    } else {
      setChosenCity({
        LocalizedName: "Tel Aviv",
        Key: "215854",
      });
    }
  }, []);

  return (
    <div>
      <SearchCities setChosenCity={setChosenCity} />
      {chosenCity && <ChosenCityWeather chosenCity={chosenCity} />}
    </div>
  );
};

export default Home;
