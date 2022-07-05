<script setup lang="ts">
  import { useToast } from '~/stores/toast';
  const toast = useToast()

  const closeToast = () => {
    toast.set({
      isShow: false,
      type: '',
      msg: ''
    })
  }
  
  const currentToast = computed(() => toast.data)

  watch(
    currentToast,
    (val) => {
      if (val.isShow) {
        setTimeout(() => {
          closeToast()
        }, 3000)
      }
    },
    { deep: true }
  )
</script>

<template>
  <div 
    v-show="toast.data.isShow" 
    class="toast" 
    :style="toast.data.type === 'success' ? 'background-color: #129612': toast.data.type === 'error' ? 'background-color: red' : 'background-color: #ff9e00'">
    <div>{{ toast.data.msg }}</div>
    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close" @click="closeToast()">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<style lang="scss">
.toast {
  border-radius: 6px;
  color: #fff;
  display: flex;
  font-size: 17px;
  min-width: 250px;
  padding: 12px 13px;
  position: fixed;
  margin-top: auto;
  margin-bottom: auto;
  visibility: visible;
  z-index: 1;
  right: 10px;
  bottom: 64px;
  justify-content: space-between;
}

.toast.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

.close {
  cursor: pointer;
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #fff;
  margin: 0px 10px;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;} 
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;} 
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}
</style>
