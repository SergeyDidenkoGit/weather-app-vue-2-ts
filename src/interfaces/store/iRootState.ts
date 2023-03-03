import { IWeatherModuleState } from "@/interfaces/store/weatherModule/IWeatherModuleState";
import { IIpModuleState } from "@/interfaces/store/ipModule/IIpModule";

export default interface IRootState {
  weatherModuleState: IWeatherModuleState;
  ipModuleState: IIpModuleState;
}
