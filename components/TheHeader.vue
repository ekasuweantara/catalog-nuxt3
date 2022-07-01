<script setup lang="ts">
  import IconShoppingCart from '~icons/mdi/shopping-cart'
  import IconTrash from '~icons/mdi/trash'
  import { useCart } from '~/stores/cart'
  import {ref} from 'vue'

  const isShow = ref(false)
  const cart = useCart()

  const setIsShow = () => {
    isShow.value = !isShow.value
  }
</script>

<template>
  <div class="nav">
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
      <div class="nav-title">
        <NuxtLink to="/" class="text-decoration-none font-black-1 font-weight-bold">
          The Catalog
        </NuxtLink>
      </div>
    </div>
    <div class="nav-cart" @click="setIsShow">
      <span class="badge" v-if="cart && cart.data.length > 0">{{ cart.data.length }}</span>
      <icon-shopping-cart style="font-size: 25px; color: #4d4d4d"/> 
    </div>
    <div class="main-nav" v-show="isShow && cart.data && cart.data.length > 0">
      <div>
        <div v-for="item in cart.data" class="d-flex flex-wrap">
            {{`${item.name} - ${item.currency} ${item.price}`}} <span class="remove-catalog cursor-pointer" @click="cart.delete(item.code)"><icon-trash style="font-size: 15px; color: red"/> </span>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.badge {
  background-color: red;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  position: absolute;
  right: 13px;
  text-align: center;
  top: 5px;
}

.main-nav {
    background-color: #eaeaea;
    border-radius: 5px;
    padding: 9px 16px;
    right: 12px;
    top: 60px;
    width: auto;
    z-index: 3;
    position: absolute;
  > ul {
    list-style: none;
  }
  ul {
    li {
      color: #4f4f4f;
    }
  }
}
</style>
