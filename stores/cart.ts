import { defineStore } from 'pinia';

export const useCart = defineStore('cart', {
  state: () => ({ data: [] }),
  actions: {
    add(item: object) {
      this.data.push(item)
    },
    delete(code: string) {
      console.log(this.data);
      
      this.data = this.data.filter((item: object) => item?.code !== code)
    },
    reset() {
      this.data = []
    }
  },
});
