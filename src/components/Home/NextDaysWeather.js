import moment from "moment";
import DayWeather from "./DayWeather";
import "./NextDaysWeather.css";

const NextDaysWeather = ({ nextDays }) => {
  const fixedData =
    nextDays &&
    nextDays.length > 0 &&
    nextDays?.map((day) => {
      const stringDay = moment(day.Date).format("dddd");
      return {
        day: stringDay,
        temp: {
          min: day.Temperature.Minimum.Value,
          max: day.Temperature.Maximum.Value,
        },
      };
    });

  return (
    <>
      <div className="next-days-title">Next Days weather:</div>
      <div className="day-weather-wrapper">
        {fixedData.map((day) => (
          <DayWeather day={day} key={day.day} />
        ))}
      </div>
    </>
  );
};

export default NextDaysWeather;
