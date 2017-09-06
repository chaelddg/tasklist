import types from './mutation_types';

export default {
  addTask: ({ commit }, data) => {
    commit(types.ADD_TASK, data);
  },
  setFilter: ({ commit }, data) => {
    commit(types.SET_FILTER, data);
  },
};
