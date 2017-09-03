import types from './mutation_types';

export default {
  addTask: ({ commit }, data) => {
    commit(types.ADD_TASK, data);
  },
};
