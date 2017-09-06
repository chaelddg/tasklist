import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const state = {
  filter: '',
  tasklist: [
    {
      text: 'use iview for front end components',
      checked: false,
    },
    {
      text: 'do the components routing',
      checked: true,
    },
    {
      text: 'configure nginx',
      checked: false,
    },
    {
      text: 'wire up to the back end',
      checked: true,
    },
  ],
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
