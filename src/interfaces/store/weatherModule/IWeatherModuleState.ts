export interface IWeatherModuleState {
  isLoading: boolean;
  units: string;
  appid: string;
  limit: number;
  currentWeatherData: Record<string, any>;
  weatherData: Record<string, any>;
  dateOptions: Record<string, string>;
  citiesWeather: object[];
  favoritesCitiesWeather: object[];
  dialogMessage: string | null;
}

export interface IWeatherModuleResponse {
  data: Record<string, unknown>;
}
