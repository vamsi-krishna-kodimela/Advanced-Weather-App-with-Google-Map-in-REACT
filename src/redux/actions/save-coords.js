import { WeatherConstants } from "../constants/weather-constants";

const saveCoords = (coords) => {
  return {
    type: WeatherConstants.SAVE_COORDS,
    coords: {...coords},
  };
};

export default saveCoords;
