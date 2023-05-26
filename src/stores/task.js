import { defineStore } from "pinia";

const arrayRange = (start, end, step = 1) => {
  return Array.from({ length: (end - start) / step + 1 }, (value, index) => start + index * step);
};

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    selectedPage: 0,
    pagination: {
      totalItem: 0,
      itemPerPage: 5,
      totalPage: 1,
      currentPage: 1,
    },
  }),
  getters: {
    paginatedTasks: (state) => {
      let firstIndex = state.pagination.itemPerPage * state.pagination.currentPage - state.pagination.itemPerPage;
      let lastIndex = state.pagination.itemPerPage * state.pagination.currentPage;
      return state.tasks.slice(firstIndex, lastIndex);
    },
    pages: (state) => {
      return arrayRange(1, state.pagination.totalPage);
    },
  },
  actions: {
    updatePagination(type) {
      if (type === "add") {
        this.pagination.totalItem++;
      } else if (type === "delete") {
        this.pagination.totalItem--;
      }
      this.pagination.totalPage = Math.ceil(this.pagination.totalItem / this.pagination.itemPerPage);
      if (this.pagination.totalPage <= this.pagination.currentPage) {
        this.pagination.currentPage = this.pagination.totalPage;
      }
    },
    addTask(newTask) {
      this.tasks.push(newTask);
      this.updatePagination("add");
    },
    toggleIsCompleted(taskId) {
      const task = this.tasks.find((task) => task.id === taskId);
      if (task) task.isCompleted = !task.isCompleted;
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.updatePagination("delete");
    },
  },
});
