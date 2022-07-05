<script setup lang="ts">
  import { useSpinner } from '~/stores/spinner';
  const spinner = useSpinner()
</script>

<template>
  <div>
    <Head>
      <Title>The Catalog</Title>
      <Meta charset="utf-8"></Meta>
      <Meta name="viewport" charset="width=device-width, initial-scale=1"></Meta>
      <Meta name="msapplication-TileColor" charset="#ffffff"></Meta>
      <Meta name="msapplication-TileImage" charset="/favicon/ms-icon-144x144.png"></Meta>
      <Meta name="theme-color" charset="#ffffff"></Meta>
      <Link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"></Link>
      <Link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"></Link>
      <Link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"></Link>
      <Link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"></Link>
      <Link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"></Link>
      <Link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"></Link>
      <Link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"></Link>
      <Link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"></Link>
      <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"></Link>
      <Link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"></Link>
      <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/android-icon-32x32.png"></Link>
      <Link rel="icon" type="image/png" sizes="96x96" href="/favicon/android-icon-96x96.png"></Link>
      <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/android-icon-16x16.png"></Link>
      <Link rel="manifest" href="/favicon/manifest.json"></Link>
    </Head>
    <TheHeader />
    <Spinner v-show="spinner.data"/>
    <div class="container-fluid">
      <slot />
    </div>
    <Toast />
    <TheFooter />
  </div>
</template>