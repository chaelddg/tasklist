import types from './mutation_types';

function addTask(state, data) {
  state.tasklist.push(data);
}

export default {
  [types.ADD_TASK](state, data) {
    addTask(state, data);
  },
};
