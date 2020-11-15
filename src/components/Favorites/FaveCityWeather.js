import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./FaveCityWeather.css";
import { useHistory } from "react-router-dom";

// Component of favorite city - shows the city name, temperature, and weather description
const FaveCityWeather = ({ cityWeather }) => {
  const history = useHistory();

  const onFaveCityClicked = () => {
    debugger;
    history.push({
      pathname: "/home",
      state: {
        fave: {
          LocalizedName: cityWeather.name,
          Key: cityWeather.key,
        },
      },
    });
  };
  const temp = cityWeather.Temperature.Metric;
  return (
    <Card className="rootCard" onClick={onFaveCityClicked}>
      <CardContent className="rootCard-content">
        <div className="description">
          <Typography className="title" color="textSecondary" gutterBottom>
            {cityWeather.name}
          </Typography>
          <Typography className="weatherText" color="textSecondary">
            {cityWeather.WeatherText}
          </Typography>
        </div>
        <Typography className="pos" color="textSecondary">
          {temp.Value}
          {temp.Unit}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FaveCityWeather;
