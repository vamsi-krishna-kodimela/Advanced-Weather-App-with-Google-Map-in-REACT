import { useSelector } from "react-redux";
const CurrentWeatherComponent = () => {
  const weather = useSelector((state) => state.weather);

  return (
    <div className="align-self-center my-4">
      {weather ? (
        <div className="d-flex flex-row align-items-center jusitfy-content-center align-self-center">
          <img
            src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt=""
            className="mr-1"
          />
          <span className="h1">
            {(weather.temp - 273.15).toFixed(1)}
            <sup>o</sup>C
          </span>
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default CurrentWeatherComponent;
