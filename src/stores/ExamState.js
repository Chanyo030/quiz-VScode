import { defineStore } from "pinia";

export default defineStore("ExamState", {
  state: () => ({
    examStart: false,
    bookClassify: "",
    classifyUnit: "",
  }),
  getters: {},
  actions: {
    catchBook(group, unit) {
      this.bookClassify = group;
      this.classifyUnit = unit;
    },
  },
});
