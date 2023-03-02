// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IIpModuleState {
  ipData: object;
  apiKey: string;
}

export interface IIpModuleResponse {
  data:
    | {
        [key: string]: number | string | boolean;
      }
    | undefined;
}
