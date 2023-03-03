import { IWeatherModuleState } from "@/interfaces/store/weatherModule/IWeatherModuleState";

export function weakWeatherDateUtil(state: IWeatherModuleState): object {
  return (): object => {
    const weakDate = [];
    const today: Date = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    );

    const nextDay: Date = new Date(today.setDate(today.getDate() + 1));

    for (let i = 0; i < state.weatherData?.list.length; i++) {
      if (
        state.weatherData?.list[i].dt >
        Date.parse(nextDay.toString()) / 1000
      ) {
        weakDate.push(state.weatherData?.list[i]);
        nextDay.setDate(nextDay.getDate() + 1);
      } else {
        continue;
      }
    }

    return weakDate;
  };
}

export function formattedWeakWeatherDateUtil(
  state: IWeatherModuleState,
  item: Record<string, any>
): object {
  return (): object => {
    return {
      id: item?.dt,
      date: new Date(item?.dt * 1000).toLocaleString(
        "en-US",
        state.dateOptions
      ),
      temperature: Math.round(item?.main?.temp),
      feels: Math.round(item?.main?.feels_like),
      clouds:
        item?.weather[0]?.description[0].toUpperCase() +
        item?.weather[0]?.description?.slice(1),
      wind: item?.wind?.speed,
      pressure: (item?.main?.pressure * 0.750063755419211).toFixed(0),
      humidity: item?.main?.humidity,
    };
  };
}

export function formattedCitiesWeatherUtil(
  state: IWeatherModuleState,
  item: Record<string, any>
): object {
  return (): object => {
    return {
      id: item.id,
      name: item.name,
      coord: item.coord,
      date: new Date(item?.dt * 1000).toLocaleString(
        "en-US",
        state.dateOptions
      ),
      temperature: Math.round(item?.main?.temp),
      feels: Math.round(item?.main?.feels_like),
      clouds:
        item?.weather[0]?.description[0].toUpperCase() +
        item?.weather[0]?.description?.slice(1),
      wind: item?.wind?.speed,
      pressure: (item?.main?.pressure * 0.750063755419211).toFixed(0),
      humidity: item?.main?.humidity,
    };
  };
}
