// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IWeatherModuleState {
  isLoading: boolean;
  units: string;
  appid: string;
  limit: number;
  currentWeatherData: {
    [key: string]: any;
  };
  weatherData: {
    [key: string]: {
      [key: string]: any;
    };
  };
  dateOptions: {
    [key: string]: string;
  };
  citiesWeather: object[];
  favoritesCitiesWeather: object[];
  dialogMessage: string | null;
}

export interface IWeatherModuleResponse {
  data:
    | {
        [key: string]: number | string | boolean;
      }
    | undefined;
}
