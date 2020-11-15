import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./DayWeather.css";

export default function DayWeather({ day }) {
  return (
    <Card className="rootDay">
      <CardContent>
        <Typography
          className="titleDay"
          color="textSecondary"
          gutterBottom
        >
          {day.day}
        </Typography>
        <Typography className="posDay" color="textSecondary">
          {day.temp.min}C -{day.temp.max}C
        </Typography>
      </CardContent>
    </Card>
  );
}
