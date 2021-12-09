import { WeatherConstants } from "../constants/weather-constants";

const saveWeather = (data) => {
  return { type: WeatherConstants.SAVE_WEATHER, weather: { ...data } };
};

export default saveWeather;