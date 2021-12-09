import { WeatherConstants } from "../constants/weather-constants";

const coordsReducer = (state = {}, action) => {
  switch (action.type) {
    case WeatherConstants.SAVE_COORDS:
      return { coords: action.coords };
    case WeatherConstants.SAVE_WEATHER:
      return { ...state, ...action.weather };
    default:
      return {};
  }
};

export default coordsReducer;
