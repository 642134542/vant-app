import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */
import user from './module/user';
import permission from './module/permission';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    permission,
  },
});
