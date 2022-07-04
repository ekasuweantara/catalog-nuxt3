<script setup lang="ts">
  import { useSpinner } from '~/stores/spinner';
  const spinner = useSpinner()
</script>

<template>
  <div>
    <TheHeader />
    <Spinner v-show="spinner.data"/>
    <div class="container-fluid">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>