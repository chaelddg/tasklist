export default {
  getTasklist: (state) => {
    if (state.filter === 'done') {
      return state.tasklist.filter(task => task.checked);
    } else if (state.filter === 'remaining') {
      return state.tasklist.filter(task => !task.checked);
    }
    return state.tasklist;
  },
};
