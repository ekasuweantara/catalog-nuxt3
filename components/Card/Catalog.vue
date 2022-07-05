<script setup lang="ts">
import { Catalog } from '~/types';

defineProps<{
  catalog: Catalog;
}>();
</script>

<template>
  <div class="card border-radius-10px">
    <img :src="catalog.images[0].url" class="card-image" alt="Avatar" style="width:100%">
    <div class="card-catalog-name">{{ catalog?.name }}</div>
    <div class="card-catalog-price">{{ catalog?.price?.formattedValue }}</div>
    <div class="card-catalog-type">
      {{ catalog.brandName }} | {{ catalog.categoryName }}
    </div>
  </div>
</template>

<style lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  max-width: 180px;
  padding: 12px 0px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .card-image{
    border-radius: 10px 10px 0px 0px;
  }
  .card-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 2px 16px;
  }
  .card-catalog-name{
    color: #212121;
    font-size: 0.86rem;
    line-height: 1.5;
    max-width: 100%;
    max-height: 100%;
    white-space: pre-wrap;
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 4px;
    padding: 3px 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .card-catalog-price{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    color: #212121;
    opacity: 1;
    font-size: 1rem;
    font-weight: bold;
    align-items: flex-end;
    line-height: 1.43;
    margin-bottom: 4px;
    padding: 0px 10px;
    flex: 1 0 auto;
  }
  .card-catalog-type {
    height: 20px;
    transition: transform 0.3s ease 0s;
    // transform: translateY(0px);
    color: #6d7588;
    margin-bottom: 6px;
    font-size: 13px;
    padding: 0px 10px;
  }
}
</style>
