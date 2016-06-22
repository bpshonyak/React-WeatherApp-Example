const API_KEY = "7f50becdcf7259b8db0f772e1ff2b6c3";
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {

  const REQUEST_URL = `${BASE_URL}&q=${city},us`;

  return {
    type: FETCH_WEATHER,
    payload: ''
  }
}
