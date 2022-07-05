import { defineStore } from 'pinia';

export const useToast = defineStore('toast', {
  state: () => ({ data: {
    isShow: false,
    msg: '',
    type: ''
  }}),
  actions: {
    set(data: object) {
      this.data = {...data};
    }
  },
});
