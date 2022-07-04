import { defineStore } from 'pinia';

export const useSpinner = defineStore('spinner', {
  state: () => ({ data: false }),
  actions: {
    set(spinner: boolean) {
      this.data = spinner;
    }
  },
});
