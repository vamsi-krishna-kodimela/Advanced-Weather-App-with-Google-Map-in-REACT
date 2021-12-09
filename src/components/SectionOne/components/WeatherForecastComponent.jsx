import { useSelector } from "react-redux";
import { useState } from "react";

const WeatherForecastComponent = () => {
  const coords = useSelector((state) => state.coords);
  const [forecast, setForecast] = useState([]);
  const getForecast = () => {
    let api = `http://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lng}&appid=70ca28271a5e378c68857386311c3ba8`;

    fetch(api)
      .then((data) => data.json())
      .then((weather) => {
        setForecast([weather.daily[0], weather.daily[1], weather.daily[2]]);
      });
  };

  let dateFormater = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    weekday: "short",
  });

  return (
    <div className="d-flex flex-column">
      <button className="btn btn-outline-success" onClick={getForecast}>
        Next 3 days forecast
      </button>
      <div className="forecast my-4">
        {forecast.map((daily, index) => (
          <div
            className="d-flex flex-row align-items-between justify-content-between my-3"
            key={index}
          >
            <div>{dateFormater.format(daily.dt)}</div>

            <div className="d-flex flex-row align-items-center jusitfy-content-center align-self-center">
              <img
                src={`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`}
                alt=""
                style={{ width: "40px" }}
                className="mr-1"
              />
              <span>
                {(daily.temp.day - 273.15).toFixed(1)}
                <sup>o</sup>C
              </span>
            </div>
            <div>{daily.weather[0].description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecastComponent;
