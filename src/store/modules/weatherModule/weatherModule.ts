import { GetterTree, MutationTree, ActionTree, Module } from "vuex";
import IRootState from "@/interfaces/store/iRootState";
import {
  IWeatherModuleState,
  IWeatherModuleResponse,
} from "@/interfaces/store/weatherModule/IWeatherModuleState";

import {
  requestCurrentWeatherByIP,
  requestWeatherByIP,
  requestCurrentWeatherByCity,
  requestWeatherByCity,
  requestCurrentWeatherByCoords,
} from "@/services/http/weather-http.service";

import {
  weakWeatherDateUtil,
  formattedWeakWeatherDateUtil,
  formattedCitiesWeatherUtil,
} from "@/utils/weatherModuleUtils";

const state: IWeatherModuleState = {
  isLoading: true,
  units: "metric",
  appid: "d8e5bc3db521d7a0cb06d99ce63610aa",
  limit: 1,
  currentWeatherData: {},
  weatherData: {},
  dateOptions: {
    month: "long",
    day: "numeric",
  },
  citiesWeather: [],
  favoritesCitiesWeather: [],
  dialogMessage: "",
};

const getters: GetterTree<IWeatherModuleState, IRootState> = {
  city: (state): string =>
    `${state.weatherData.city.name}, ${state.weatherData.city.country}`,
  date: (state): string =>
    new Date(state.currentWeatherData.dt * 1000).toLocaleString(
      "en-US",
      state.dateOptions
    ),
  currentTemperature: (state): number =>
    Math.round(state.currentWeatherData.main.temp),
  currentFeels: (state): number =>
    Math.round(state.currentWeatherData?.main?.feels_like),
  currentClouds: (state): string => {
    return (
      state.currentWeatherData?.weather[0]?.description[0].toUpperCase() +
      state.currentWeatherData?.weather[0]?.description?.slice(1)
    );
  },
  currentWind: (state): number => state.currentWeatherData?.wind?.speed,
  currentPressure: (state): string => {
    return (
      state.currentWeatherData?.main?.pressure * 0.750063755419211
    ).toFixed(0);
  },
  currentHumidity: (state): string => state.currentWeatherData?.main?.humidity,
  weakWeatherDate: (state): object => {
    return weakWeatherDateUtil(state);
  },
  formattedWeakWeatherDate: (state, getters) => {
    return getters.weakWeatherDate?.map((item: Record<string, any>) => {
      return formattedWeakWeatherDateUtil(state, item);
    });
  },
  formattedCitiesWeather: (state) => {
    return state.citiesWeather.map((item: { [key: string]: any }) => {
      return formattedCitiesWeatherUtil(state, item);
    });
  },
};
const mutations: MutationTree<IWeatherModuleState> = {
  setCurrentWeatherData: (state, data) => {
    state.currentWeatherData = data;
  },
  setWeatherData: (state, data) => {
    state.weatherData = data;
  },
  setLoading: (state, value) => {
    state.isLoading = value;
  },
  setDialogMessage: (state, value) => {
    state.dialogMessage = value;
  },
  setCitiesWeather: (state, data) => {
    state.dialogMessage = null;
    if (state.citiesWeather.length === 0) {
      state.citiesWeather.push(data);
    } else if (state.citiesWeather.length < 5) {
      if (
        !state.citiesWeather.some((item: any): boolean => item.dt === data.dt)
      ) {
        state.citiesWeather.push(data);
      } else {
        state.dialogMessage = "City exist in list";
      }
    }
  },
  deleteCitiesWeatherItem: (state, data) => {
    if (state.citiesWeather.length > 0) {
      state.citiesWeather = state.citiesWeather.filter((item: any) => {
        return item.id !== data.id;
      });
    }
  },
  clearCitiesWeather: (state) => {
    state.citiesWeather = [];
  },
  setFavoritesCitiesWeather: (state, date) => {
    state.favoritesCitiesWeather.push(date);
  },
};
const actions: ActionTree<IWeatherModuleState, IRootState> = {
  fetchCurrentWeatherByIP: async ({ state, commit }, userData) => {
    try {
      const response: IWeatherModuleResponse = await requestCurrentWeatherByIP(
        userData,
        state
      );
      commit("setCurrentWeatherData", response.data);
      commit("setCitiesWeather", response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        commit("setLoading", false);
      }, 1000);
    }
  },
  fetchWeatherByIP: async ({ state, commit }, userData) => {
    try {
      const response: IWeatherModuleResponse = await requestWeatherByIP(
        userData,
        state
      );
      commit("setWeatherData", response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        commit("setLoading", false);
      }, 1000);
    }
  },
  fetchCurrentWeatherByCity: async ({ state, commit }, city) => {
    try {
      const response: IWeatherModuleResponse =
        await requestCurrentWeatherByCity(city, state);
      console.log(response.data);
      commit("setCurrentWeatherData", response.data);
    } catch (e) {
      console.log(e);
    } finally {
      commit("setLoading", false);
    }
  },
  fetchWeatherByCity: async ({ state, commit }, city) => {
    try {
      const response: IWeatherModuleResponse = await requestWeatherByCity(
        city,
        state
      );
      commit("setWeatherData", response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      commit("setLoading", false);
    }
  },
  fetchCurrentWeatherByCoords: async ({ state, commit }, userData) => {
    try {
      const response: IWeatherModuleResponse =
        await requestCurrentWeatherByCoords(userData, state);
      return response.data;
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => {
        commit("setLoading", false);
      }, 1000);
    }
  },
};

export const weatherModule: Module<IWeatherModuleState, IRootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
