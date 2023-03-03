import { IWeatherModuleState } from "@/interfaces/store/weatherModule/IWeatherModuleState";
import axios from "axios";

export async function requestCurrentWeatherByIP(
  userData: Record<string, unknown>,
  state: IWeatherModuleState
) {
  return await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      lat: userData.latitude,
      lon: userData.longitude,
      units: state.units,
      appid: state.appid,
    },
  });
}

export async function requestWeatherByIP(
  userData: Record<string, unknown>,
  state: IWeatherModuleState
) {
  return await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
    params: {
      lat: userData.latitude,
      lon: userData.longitude,
      units: state.units,
      appid: state.appid,
    },
  });
}

export async function requestCurrentWeatherByCity(
  city: string,
  state: IWeatherModuleState
) {
  return await axios
    .get("https://api.openweathermap.org/geo/1.0/direct", {
      params: {
        q: city,
        limit: state.limit,
        appid: state.appid,
      },
    })
    .then((response) => {
      return axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          lat: response.data[0].lat,
          lon: response.data[0].lon,
          units: state.units,
          appid: state.appid,
        },
      });
    });
}

export async function requestWeatherByCity(
  city: string,
  state: IWeatherModuleState
) {
  return await axios
    .get("https://api.openweathermap.org/geo/1.0/direct", {
      params: {
        q: city,
        limit: state.limit,
        appid: state.appid,
      },
    })
    .then((response) => {
      return axios.get("https://api.openweathermap.org/data/2.5/forecast", {
        params: {
          lat: response.data[0].lat,
          lon: response.data[0].lon,
          units: state.units,
          appid: state.appid,
        },
      });
    });
}

export async function requestCurrentWeatherByCoords(
  userData: Record<string, unknown>,
  state: IWeatherModuleState
) {
  return await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: {
      lat: userData.lat,
      lon: userData.lon,
      units: state.units,
      appid: state.appid,
    },
  });
}
