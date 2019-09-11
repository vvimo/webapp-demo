import request from '@/utils/api';
import { State } from './interface';
import { Commit } from 'vuex';

interface GetTodayWeatherParam {
  city: string;
}

export default {
  state: {
    count: 0,
    test1: [],
  },
  getters: {
    count: (state: State) => state.count,
    message: (state: State) => state.test1,
  },
  mutations: {
    INCREMENT (state: State, num: number) {
      state.count += num;
    },
  },
  actions: {
    async getTodayWeather (context: { commit: Commit }, params: GetTodayWeatherParam) {
      return request.get('/api/weatherApi', {params});
    },
  },
};
