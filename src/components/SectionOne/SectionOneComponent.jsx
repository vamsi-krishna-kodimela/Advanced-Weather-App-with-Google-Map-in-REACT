import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import LocationComponent from "./components/LocationComponent";
import CurrentWeatherComponent from "./components/CurrentWeatherComponent";
import WeatherForecastComponent from "./components/WeatherForecastComponent";
import saveWeather from "../../redux/actions/save-weather";

const SectionOneComponent = () => {
  const coords = useSelector((state) => state.coords);
  const dispatch = useDispatch();
  useEffect(() => {
    if (coords) {
      let api = `http://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lng}&appid=70ca28271a5e378c68857386311c3ba8`;
      fetch(api)
        .then((data) => data.json())
        .then((weather) => {
          let temp = weather.main.temp;
          let city = weather.name;
          let icon = weather.weather[0].icon;
          console.log(weather);
          dispatch(
            saveWeather({ weather: { temp: temp, city: city, icon: icon } })
          );
        });
    }
  }, [coords, dispatch]);

  return (
    <div className="col-12 col-lg-6 d-flex flex-column">
      <LocationComponent />
      <CurrentWeatherComponent />
      <WeatherForecastComponent />
    </div>
  );
};

export default SectionOneComponent;
