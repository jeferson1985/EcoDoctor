import { createStore } from "vuex";

const store = createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, newTask) {
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    removeTask(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    checkTasks(state, index) {
      state.tasks.forEach[index] = true;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    selectedTask(state, task) {
      state.selectedTask = task;
    },
    saveTasks(state) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    uploadTasks(state) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      if (tasks) {
        state.tasks = tasks;
      }
    },
  },
  actions: {
    createTask({ commit }, newTask) {
      commit("addTask", newTask);
      commit("saveTasks");
    },
    setSelectedTask({ commit }, task) {
      commit("selectedTask", task);
    },
  },
  getters: {
    tasks(state) {
      return state.tasks;
    },
  },
});

export default store;
