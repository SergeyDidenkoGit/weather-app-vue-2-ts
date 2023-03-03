import { MutationTree, ActionTree, Module } from "vuex";
import IRootState from "@/interfaces/store/iRootState";
import {
  IIpModuleState,
  IIpModuleResponse,
} from "@/interfaces/store/ipModule/IIpModule";
import { requestIP } from "@/services/http/ip-http.service";
import { AxiosResponse } from "axios";

const state: IIpModuleState = {
  ipData: {},
  apiKey: "bb691e293eec4a21a615c07be7216208",
};

const mutations: MutationTree<IIpModuleState> = {
  setIP: (state, value: object) => {
    state.ipData = value;
  },
};

const actions: ActionTree<IIpModuleState, IRootState> = {
  fetchIP: async ({ commit }) => {
    try {
      const response: AxiosResponse<IIpModuleResponse> = await requestIP();
      commit("setIP", response.data);
    } catch (e) {
      console.log(e);
    }
  },
};

export const ipModule: Module<IIpModuleState, IRootState> = {
  state,
  mutations,
  actions,
  namespaced: true,
};
