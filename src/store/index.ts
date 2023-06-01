import { defineStore } from "pinia";

interface rootState {
  isCollapse: boolean;
  isLoading: boolean;
}

const useStore = defineStore("root", {
  state: (): rootState => {
    return {
      isCollapse: false,
      isLoading: false,
    };
  },
  actions: {
    collapseMenu() {
      this.isCollapse = !this.isCollapse;
    },

    start() {
      this.isLoading = true;
    },

    finish() {
      this.isLoading = false;
    },
  },
});

export default useStore;
